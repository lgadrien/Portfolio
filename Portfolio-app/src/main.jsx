// src/main.jsx ou src/index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeProvider from "./context/ThemeContext";
import LanguageProvider from "./context/LanguageContext";
import checkEnvVariables from "./utils/checkEnv";
import "./index.css";

// Vérifier les variables d'environnement au démarrage
checkEnvVariables();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>
);
