<template>
  <small class="lh-1"
    ><small
      >created <span :title="longDate">on {{ shortDate }}</span></small
    ></small
  >
</template>

<script setup>
import { computed, ref } from "vue";
const props = defineProps(["date"]);
const dateObj = new Date(props.date);

const language = ref(navigator.language);

const shortDate = computed(() => {
  // Format according to the user's locale
  return dateObj.toLocaleString(navigator.language, {
    year: "numeric", // Example: "2023"
    month: "short", // Example: "Nov"
    day: "numeric", // Example: "9"
  });
});

const longDate = computed(() => {
  // Format according to the user's locale
  return dateObj.toLocaleString(navigator.language, {
    weekday: "short", // Example: "Thu"
    year: "numeric", // Example: "2023"
    month: "short", // Example: "Nov"
    day: "numeric", // Example: "9"
    hour: "numeric", // Example: "11"
    minute: "numeric", // Example: "15"
    second: "numeric", // Optional: show seconds
    timeZoneName: "short", // Show time zone like "GMT+1"
  });
});
</script>
