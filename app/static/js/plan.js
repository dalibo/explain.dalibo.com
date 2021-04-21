import './common.js';
import Vue from 'vue';
import pev2 from 'pev2';
import axios from 'axios';
import bootstrap from 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';

import VueTour from 'vue-tour';
import 'vue-tour/dist/vue-tour.css';
Vue.use(VueTour);

const tourVersion = '1.16';

new Vue({
  el: "#app",
  data: function() {
    return {
      plan: null,
      tourOptions: {
        labels: {
          buttonStop: 'Understood, thanks'
        }
      },
      tourSteps: [
        {
          target: '#shareButton',
          content: `The plan is not saved on the server until you click this button.<br>
          Once done, you'll get a permanent link you can share with others.`
        }
      ],
      tourCallbacks: {
        onFinish () {
          localStorage.setItem('tour', tourVersion);
        }
      }
    };
  },
  components: {
    pev2: pev2
  },
  computed: {
    planInLocalStorage () {
      // finds the plan in local storage
      for (var i in localStorage) {
        if (_.startsWith(i, 'plan_')) {
          const plan = JSON.parse(localStorage[i]);
          if (plan.shareId == this.plan.shareId) {
            return localStorage.getItem(i);
          }
        }
      }
      return false;
    },
  },
  created () {
    if (window.plan !== undefined) {
      // Load from script tag
      this.plan = plan;
    } else {
      this.id = location.hash.replace('#', '');
      // Load from localStorage
      this.plan = JSON.parse(localStorage.getItem(this.id));
      if (this.plan) {
        this.plan.sql = this.plan.query;
        document.title = this.plan.title + ' ' + document.title;
        location.hash = '';
      } else {
        // No hash in URL redirect to home page
        window.location.href = "/plan_error";
      }
    }
    const finishedTour = localStorage.getItem('tour');
    if (!finishedTour || finishedTour !== tourVersion) {
      const tour = this.$tours['tour'];
      tour && tour.start();
    }
  },

  methods: {
    share(event) {
      var form = event.target;
      //event.preventDefault();
      axios.post(form.action, {
        title: this.plan.title,
        plan: this.plan.plan,
        query: this.plan.query
      }).then((response) => {
        var data = response.data;
        var planFromStorage = JSON.parse(localStorage.getItem(this.id));
        planFromStorage.shareId = data.id;
        planFromStorage.deleteKey = data.deleteKey;
        localStorage.setItem(this.id, JSON.stringify(planFromStorage));

        // redirect to page with plan from server
        window.location.href = "/plan/" + data.id + location.hash;
      });
    }
  }
});
