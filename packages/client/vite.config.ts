import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": "http://localhost:300/",
    },
  },
  // 👇 ADD THIS RESOLVE BLOCK 👇
  resolve: {
    alias: {
      // Maps the "@" alias to the "src" folder relative to the config file location
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
