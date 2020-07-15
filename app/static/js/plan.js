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
  el: '#header',
  data () {
    return {
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
    }
  },
  mounted () {
    const finishedTour = localStorage.getItem('tour');
    if (!finishedTour || finishedTour !== tourVersion) {
      const tour = this.$tours['tour'];
      tour && tour.start();
    }
  }
});

new Vue({
  el: "#app",
  data: function() {
    return {
      plan: '',
      query: ''
    };
  },
  components: {
    pev2: pev2
  },
  created () {
    this.plan = plan;
    this.query = sql;
    //axios
      //.get(window.location.href + '.json')
      //.then(response => {
        //this.plan = response.data.plan;
        //this.query = response.data.query;
      //})
  }
});
