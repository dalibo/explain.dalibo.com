import "./common.js";
import { createApp } from "vue/dist/vue.esm-bundler";
import { Plan } from "pev2";
import { ref } from "vue";

import "pev2/dist/style.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Add all icons to the library
library.add(fas);
const app = createApp({
  setup() {
    const plan = ref(planData);
    return { plan };
  },
  components: {
    pev2: Plan,
  },
});
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
