/**
 * Logger personnalisé pour le projet
 * En production, les logs non critiques sont désactivés
 * En développement, tous les logs sont actifs
 */

const isDev = import.meta.env.DEV;

export const logger = {
  /**
   * Log d'information (désactivé en production)
   */
  log: (...args) => {
    if (isDev) {
      console.log(...args);
    }
  },

  /**
   * Warnings (désactivé en production)
   */
  warn: (...args) => {
    if (isDev) {
      console.warn(...args);
    }
  },

  /**
   * Erreurs (toujours actif, même en production)
   */
  error: (...args) => {
    console.error(...args);
  },

  /**
   * Log d'information avec prefix
   */
  info: (message, ...args) => {
    if (isDev) {
      console.log(`ℹ️ ${message}`, ...args);
    }
  },

  /**
   * Log de succès
   */
  success: (message, ...args) => {
    if (isDev) {
      console.log(`✅ ${message}`, ...args);
    }
  },

  /**
   * Debug logs (seulement en développement)
   */
  debug: (...args) => {
    if (isDev) {
      console.debug(...args);
    }
  },
};

export default logger;
