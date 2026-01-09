/** @type {import('tailwindcss').Config} */
export default {
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
        "dark-bg": "#313338",
        "dark-surface": "#2B2D31",
        "dark-accent": "#8B5CF6",
        "dark-text": "#F3F4F6",

        // Light Mode - Electric Slate
        "light-bg": "#FFFFFF",
        "light-surface": "#F8FAFC",
        "light-accent": "#7C3AED",
        "light-hover": "#8B5CF6",
        "light-text": "#1E293B",
        "light-text-secondary": "#64748B",
      },
    },
  },
  plugins: [],
};
