import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  //the below server: and resolve: helped import images from assets as assets is outside public and src directory. Also some changes were made accordingly to utils.js
  server: {
    fs: {
      allow: [".."], // Allow access to parent directory
    },
  },
  resolve: {
    alias: {
      "@assets": "/assets", // Optional alias for easier imports
    },
  },
  base: "/portfolio/",
});
