import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // Initialiser directement avec la valeur du localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("darkMode");
    return storedTheme ? JSON.parse(storedTheme) : false;
  });

  useEffect(() => {
    // Ajouter la classe d'animation
    document.documentElement.classList.add("theme-transitioning");

    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
    }

    // Retirer la classe d'animation après 400ms
    const timer = setTimeout(() => {
      document.documentElement.classList.remove("theme-transitioning");
    }, 400);

    // Stocker le thème dans localStorage pour la persistance
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    return () => clearTimeout(timer);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
