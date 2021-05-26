import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: '/lit-html-editor/',
  build: {
    lib: {
      entry: "src/rich-text-editor.ts",
      formats: ["es"],
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
});
