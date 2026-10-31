import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

// https://vite.dev/config/
export default defineConfig({
  // SITE_PASSWORD (porte preview) exposé au front ; secrets serveur sans préfixe SITE_/VITE_
  envPrefix: ["VITE_", "SITE_"],
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
});
