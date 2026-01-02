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
        // Dark Mode - Electric Slate
        "dark-bg": "#0A0A0A", // Fond principal (Noir Profond)
        "dark-surface": "#171717", // Surface (Cartes/Menus)
        "dark-accent": "#8B5CF6", // Accent (Violet Électrique)
        "dark-text": "#F3F4F6", // Texte principal (Blanc cassé)

        // Light Mode - Electric Slate (Harmonieux avec le violet)
        "light-bg": "#FFFFFF", // Fond principal (Blanc Pur)
        "light-surface": "#F8FAFC", // Surface (Cartes/Menus)
        "light-accent": "#7C3AED", // Accent principal (Violet 600)
        "light-hover": "#8B5CF6", // Hover (Violet 500)
        "light-text": "#1E293B", // Texte principal (Gris Anthracite)
        "light-text-secondary": "#64748B", // Texte secondaire (Gris ardoise)

        // Anciens noms conservés pour compatibilité
        "custom-black": "#0A0A0A",
        "custom-dark": "#171717",
        "custom-beige": "#FFFFFF",
        "custom-purple-light": "#8B5CF6",
        "custom-purple-dark": "#7C3AED",
      },
    },
  },
  plugins: [],
};
