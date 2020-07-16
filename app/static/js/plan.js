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
    var id = location.hash.replace('#', '');
    if (id) {
      // Load from localStorage
      var planFromStorage = JSON.parse(localStorage.getItem(id));
      this.title = planFromStorage.title;
      this.plan = planFromStorage.plan;
      this.query = planFromStorage.query;
      location.hash = '';
    } else {
      // Load from script tag
      this.title = title;
      this.plan = plan;
      this.query = sql;
    }
    const finishedTour = localStorage.getItem('tour');
    if (!finishedTour || finishedTour !== tourVersion) {
      const tour = this.$tours['tour'];
      tour && tour.start();
    }
  }
});
