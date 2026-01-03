module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      colors: {
        // Dark Mode - Discord-like Gray
        "dark-bg": "#313338", // Fond principal (Gris Discord)
        "dark-surface": "#2B2D31", // Surface (Cartes/Menus, légèrement plus sombre)
        "dark-accent": "#8B5CF6", // Accent (Violet Électrique)
        "dark-text": "#F3F4F6", // Texte principal (Blanc cassé)

        // Light Mode - Electric Slate (Harmonieux avec le violet)
        "light-bg": "#FFFFFF", // Fond principal (Blanc Pur)
        "light-surface": "#F8FAFC", // Surface (Cartes/Menus)
        "light-accent": "#7C3AED", // Accent principal (Violet 600)
        "light-hover": "#8B5CF6", // Hover (Violet 500)
        "light-text": "#1E293B", // Texte principal (Gris Anthracite)
        "light-text-secondary": "#64748B", // Texte secondaire (Gris ardoise)

        // Anciens noms conservés pour compatibilité (alignés sur le gris Discord)
        "custom-black": "#313338",
        "custom-dark": "#2B2D31",
        "custom-beige": "#FFFFFF",
        "custom-purple-light": "#8B5CF6",
        "custom-purple-dark": "#7C3AED",
      },
    },
  },
  plugins: [],
};
