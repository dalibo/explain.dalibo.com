import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    manifest: true,
    rollupOptions: {
      input: {
        about: "/app/static/js/common.js",
        index: "/app/static/js/index.js",
        plan: "/app/static/js/plan.js",
      },
      output: {
        dir: "app/static",
      },
    },
  },
});
