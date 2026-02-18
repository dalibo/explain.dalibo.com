<template>
  <li class="nav-item ms-2">
    <a
      class="nav-link"
      href="#"
      @click="toggleTheme"
      :title="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
    >
      <font-awesome-icon :icon="theme === 'dark' ? 'moon' : 'sun'" />
    </a>
  </li>
</template>

<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faMoon, faSun);

import { useColorMode } from "@vueuse/core";

const theme = useColorMode({
  attribute: "data-bs-theme",
  storageKey: "theme",
});

function toggleTheme() {
  theme.value = theme.value === "dark" ? "light" : "dark";
}
</script>
