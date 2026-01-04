// src/main.jsx ou src/index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import App from "./App";
import ThemeProvider from "./context/ThemeContext";
import LanguageProvider from "./context/LanguageContext";
import ErrorBoundary from "./Components/ErrorBoundary";
import checkEnvVariables from "./utils/checkEnv";
import "./index.css";

// Vérifier les variables d'environnement au démarrage
checkEnvVariables();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <LanguageProvider>
          <App />
          <Analytics />
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
