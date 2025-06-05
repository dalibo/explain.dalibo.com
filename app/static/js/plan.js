import "./common.js";
import { createApp } from "vue";
import { Plan } from "pev2";
import { ref } from "vue";
import Created from "./created.vue";

import "pev2/dist/pev2.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Add all icons to the library
library.add(faLink);
const app = createApp({
  setup() {
    const plan = ref(planData);
    const decryptError = ref(false);
    const passwordInput = ref("");

    async function unlockPlan(e) {
      e.preventDefault();
      try {
        plan.value.plan = await decrypt(plan.value.plan, plan.value.iv);
        if (plan.value.query) {
          plan.value.query = await decrypt(plan.value.query, plan.value.iv);
        }
        plan.value.iv = null;
      } catch (err) {
        decryptError.value = true;
      }
    }

    function fromBase64(b64) {
      const binary = atob(b64);
      return Uint8Array.from(binary, (c) => c.charCodeAt(0));
    }

    async function decrypt(encrypted, iv) {
      const ctBytes = fromBase64(encrypted);
      const ivBytes = fromBase64(iv);

      const pwKey = await window.crypto.subtle.importKey(
        "raw",
        new TextEncoder().encode(passwordInput.value),
        "PBKDF2",
        false,
        ["deriveKey"]
      );

      const key = await window.crypto.subtle.deriveKey(
        { name: "PBKDF2", salt: ivBytes, iterations: 100000, hash: "SHA-256" },
        pwKey,
        { name: "AES-GCM", length: 256 },
        false,
        ["decrypt"]
      );

      const plaintext = await window.crypto.subtle.decrypt(
        { name: "AES-GCM", iv: ivBytes },
        key,
        ctBytes
      );

      return new TextDecoder().decode(plaintext);
    }
    return { decryptError, passwordInput, plan, unlockPlan };
  },
  components: {
    pev2: Plan,
    created: Created,
  },
});
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
