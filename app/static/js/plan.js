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
      id: '',
      plan: '',
      query: '',
      title: '',
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
  created () {
    this.id = location.hash.replace('#', '');
    if (this.id) {
      // Load from localStorage
      var planFromStorage = JSON.parse(localStorage.getItem(this.id));
      this.title = planFromStorage.title;
      document.title = this.title + ' ' + document.title;
      this.plan = planFromStorage.plan;
      this.query = planFromStorage.query;
      location.hash = '';
    } else if (window.title !== undefined && window.plan !== undefined) {
      // Load from script tag
      this.title = title;
      this.plan = plan;
      this.query = sql;
    } else {
      window.location.href = "/";
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
        title: this.title,
        plan: this.plan,
        query: this.query
      }).then((response) => {
        var data = response.data;
        var planFromStorage = JSON.parse(localStorage.getItem(this.id));
        planFromStorage.shareId = data.id;
        planFromStorage.deleteKey = data.deleteKey;
        localStorage.setItem(this.id, JSON.stringify(planFromStorage));

        // redirect to page with plan from server
        window.location.href = "/plan/" + data.id;
      });
    }
  }
});
