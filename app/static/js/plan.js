import './common.js';
import Vue from 'vue';
import pev2 from 'pev2';
import axios from 'axios';
import bootstrap from 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';

import VueTippy, { TippyComponent } from "vue-tippy";
Vue.use(VueTippy);
Vue.component("tippy", TippyComponent);

new Vue({
  el: '#header'
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
