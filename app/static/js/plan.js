import './common.js';
import { createApp } from 'vue/dist/vue.esm-bundler';
import { Plan } from "pev2"
import axios from 'axios';
import bootstrap from 'bootstrap';

import "pev2/dist/style.css";

import { library  } from "@fortawesome/fontawesome-svg-core"
import { fas  } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon  } from "@fortawesome/vue-fontawesome"

// Add all icons to the library
library.add(fas)

const app = createApp({
  el: "#app",
  data: function() {
    return {
      plan: null,
    };
  },
  components: {
    pev2: Plan
  },
  created () {
    this.plan = plan;
  }
});
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
