import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { emptyDir } from "rollup-plugin-empty-dir";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), emptyDir()],
  resolve: {
    dedupe: ["vue"],
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: {
        about: "/app/static/js/common.js",
        index: "/app/static/js/index.js",
        plan: "/app/static/js/plan.js",
      },
      output: {
        dir: "app/static/dist",
      },
    },
  },
});
