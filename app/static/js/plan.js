import './common.js';
import Vue from 'vue';
import pev2 from 'pev2';
import axios from 'axios';
import bootstrap from 'bootstrap';

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
    axios
      .get(window.location.href + '.json')
      .then(response => {
        this.plan = response.data.plan;
        this.query = response.data.query;
      })
  }
});
