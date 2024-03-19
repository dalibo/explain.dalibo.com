import { Dropdown, Alert, Modal } from "bootstrap";

import "../css/custom.scss";
import { createApp } from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHeart);

if (document.getElementById("footer")) {
  const app = createApp({});
  app.component("font-awesome-icon", FontAwesomeIcon);
  app.mount("#footer");
}
