import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimisation du bundle
    rollupOptions: {
      output: {
        // Code splitting manuel pour séparer les dépendances lourdes
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          icons: ["react-icons/fa", "react-icons/di", "react-icons/si"],
          "ui-libs": ["react-parallax-tilt", "react-toastify"],
          email: ["@emailjs/browser"],
        },
      },
    },
    // Optimisation des chunks
    chunkSizeWarningLimit: 1000,
    // Minification agressive
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Supprimer les console.log en production
        drop_debugger: true,
      },
    },
  },
  // Optimisation du serveur de développement
  server: {
    port: 3000,
  },
  // Optimisation des dépendances
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
});
