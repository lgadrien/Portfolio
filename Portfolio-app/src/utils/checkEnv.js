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
    console.error(
      "❌ Variables d'environnement manquantes:",
      missingVars.join(", ")
    );
    console.error("📝 Consultez le fichier .env.example pour la configuration");
    return false;
  }

  if (import.meta.env.DEV) {
    console.log("✅ Variables d'environnement configurées");
  }

  return true;
};

export default checkEnvVariables;
