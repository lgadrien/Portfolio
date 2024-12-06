module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Police principale
        serif: ['Merriweather', 'serif'], // Option pour les titres
      },
    },
  },
  plugins: [],
}
