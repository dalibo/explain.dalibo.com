import { Dropdown, Alert, Modal } from "bootstrap";

import "../css/custom.scss";
import { createApp } from "vue/dist/vue.esm-bundler";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Add all icons to the library
library.add(fas);
const app = createApp({});
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#footer");
