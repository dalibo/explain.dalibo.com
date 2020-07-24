import './common.js';
import axios from 'axios';
import Vue from 'vue';
import moment from 'moment';
import _ from 'lodash';
import VueTimeago from 'vue-timeago';
import Notifications from 'vue-notification';

Vue.use(VueTimeago, {locale: 'en'});
Vue.use(Notifications);

new Vue({
  el: "#app",
  data: function() {
    return {
      samples: [
        ['Example 1 (JSON)', 'plan_1.json', 'plan_1.sql'],
        ['Example 1 (plain text)', 'plan_1.txt', 'plan_1.sql'],
        ['Example 2', 'plan_2.json', 'plan_2.sql'],
        ['Example 3', 'plan_3.json', 'plan_3.sql'],
        ['Example 4', 'plan_4.json'],
        ['Example 5', 'plan_5.json', 'plan_5.sql'],
        ['With subplan', 'plan_6.txt'],
        ['With CTE', 'plan_7.txt'],
        ['Very large plan', 'plan_8.json'],
        ['With trigger', 'plan_trigger.json', 'plan_trigger.sql'],
        ['With trigger (plain text)', 'plan_trigger.txt', 'plan_trigger_2.sql'],
        ['Parallel (verbose)', 'plan_parallel.json'],
        ['Parallel (4 workers)', 'plan_parallel2.txt', 'plan_parallel2.sql']
      ],
      titleInput: '',
      planInput: '',
      queryInput: '',
      draggingPlan: false,
      draggingQuery: false,
      plans: [],
    };
  },
  mounted() {
    const textAreas = document.getElementsByTagName('textarea');
    Array.prototype.forEach.call(textAreas, (elem) => {
        elem.placeholder = elem.placeholder.replace(/\\n/g, '\n');
    });
    this.loadPlans();
  },
  methods: {

    checkForm(event) {
      var form = event.target;
      event.preventDefault();
      this.titleInput = this.titleInput || 'Plan created on ' + moment().format("MMMM Do YYYY, h:mm a");;
      var createdOn = new Date();
      var id = 'plan_' + createdOn.getTime().toString();
      localStorage.setItem(id,
        JSON.stringify({
          id: id,
          title: this.titleInput,
          plan: this.planInput,
          query: this.queryInput,
          createdOn: createdOn
        })
      );
      window.location.href = '/plan#' + id;
    },

    loadSample(sample) {
      this.titleInput = sample[0];
      axios.get(staticUrl + 'samples/' + sample[1]).then((response) => {
        this.planInput = response.request.responseText;
      });
      if (sample[2]) {
        axios.get(staticUrl + 'samples/' + sample[2]).then((response) => {
          this.queryInput = response.request.responseText;
        });
      } else {
        this.queryInput = '';
      }
    },

    handleDrop(event) {
      const input = event.srcElement;
      if (!(input instanceof HTMLTextAreaElement)) {
        return;
      }
      this.draggingPlan = false;
      this.draggingQuery = false;
      if (!event.dataTransfer) {
        return;
      }
      const file = event.dataTransfer.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (reader.result instanceof ArrayBuffer) {
          return;
        }
        input.value = reader.result || '';
        input.dispatchEvent(new Event('input'));
      };
      reader.readAsText(file);
    },

    loadPlans() {
      var plans = [];
      for (var i in localStorage) {
        if (_.startsWith(i, 'plan_')) {
          plans.push(JSON.parse(localStorage[i]));
        }
      }

      this.plans = _.chain(plans).sortBy('createdOn').reverse().value();
    },

    getPlanUrl(plan) {
      return plan.shareId ? '/' + plan.shareId : '#' + plan.id;
    },

    deletePlan(plan) {
      if (confirm("You're about to delete plan \"" + plan.title + "\". Are you sure?")) {
        localStorage.removeItem(plan.id);
        if (plan.shareId) {
          axios.get('/plan/' + plan.shareId + '/' + plan.deleteKey).then(() => {
            this.$notify({
              text: 'Plan removed from server',
              type: 'success'
            });
          });
        }
        this.loadPlans();
      }
    }
  }
});
