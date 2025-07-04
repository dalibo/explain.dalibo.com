import "./common.js";
import { createApp } from "vue";
import { Plan } from "pev2";
import { ref } from "vue";
import Created from "./created.vue";
import VueTippy from "vue-tippy";

import "pev2/dist/pev2.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Add all icons to the library
library.add(faLink);
const app = createApp({
  setup() {
    const plan = ref(planData);
    return { plan };
  },
  components: {
    pev2: Plan,
    created: Created,
  },
});
app.use(VueTippy, { defaultProps: { theme: "light" } });
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
