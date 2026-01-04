import logger from "./logger";

// Vérification des variables d'environnement au démarrage
const checkEnvVariables = () => {
  const requiredEnvVars = {
    VITE_EMAILJS_SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    VITE_EMAILJS_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    VITE_EMAILJS_PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  };

  const missingVars = Object.entries(requiredEnvVars)
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missingVars.length > 0) {
    logger.error(
      "❌ Variables d'environnement manquantes:",
      missingVars.join(", ")
    );
    logger.error("📝 Consultez le fichier .env.example pour la configuration");
    return false;
  }

  // Warning pour le token GitHub (optionnel mais recommandé)
  if (!import.meta.env.VITE_GITHUB_TOKEN) {
    logger.warn(
      "⚠️ VITE_GITHUB_TOKEN manquant : Les requêtes GitHub seront limitées (60/h)."
    );
  }

  logger.success("Variables d'environnement configurées");

  return true;
};

export default checkEnvVariables;
