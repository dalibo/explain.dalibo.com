import './common.js';
import Vue from 'vue';
import pev2 from 'pev2';

new Vue({
  el: "#app",
  data: function() {
    return {
      plan: plan,
      query: query
    };
  },
  components: {
    pev2: pev2
  }
});
