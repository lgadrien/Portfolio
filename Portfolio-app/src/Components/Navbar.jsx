import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

const NavBar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollTo = (id) => {
    setIsOpen(false);
    setTimeout(() => {
      if (id === "présentation") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  useEffect(() => {
    if (isOpen) document.body.classList.add("menu-open");
    else document.body.classList.remove("menu-open");
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-colors duration-500 ease-in-out ${
        darkMode ? "bg-gray-900" : "bg-white"
      } shadow-md navbar-wrapper`}
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="flex justify-between items-center py-4 px-6 md:px-20">
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${
              darkMode ? "text-white" : "text-black"
            } focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1`}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <FaTimes size={24} aria-hidden="true" />
            ) : (
              <FaBars size={24} aria-hidden="true" />
            )}
          </button>
        </div>
        <div className="hidden md:flex items-center">
          <Link
            to="/"
            className={`${
              darkMode ? "text-white" : "text-black"
            } text-xl font-semibold hover:text-gray-500 transition-colors duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2`}
            aria-label="Retour à l'accueil - Adrien Le Guen"
          >
            ADRIEN LE GUEN
          </Link>
        </div>
        <nav
          className="hidden md:flex ml-auto space-x-6"
          aria-label="Menu principal"
        >
          <button
            onClick={() => handleScrollTo("présentation")}
            className={`${
              darkMode ? "text-white" : "text-black"
            } px-3 py-2 hover:text-gray-500 transition-colors duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 rounded`}
            aria-label="Aller à la section Présentation"
          >
            Présentation
          </button>
          <button
            onClick={() => handleScrollTo("projets")}
            className={`${
              darkMode ? "text-white" : "text-black"
            } px-3 py-2 hover:text-gray-500 transition-colors duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 rounded`}
            aria-label="Aller à la section Projets"
          >
            Projets
          </button>
          <button
            onClick={() => handleScrollTo("contact")}
            className={`${
              darkMode ? "text-white" : "text-black"
            } px-3 py-2 hover:text-gray-500 transition-colors duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 rounded`}
            aria-label="Aller à la section Contact"
          >
            Contact
          </button>
        </nav>
        <div className="flex items-center ml-6">
          <button
            onClick={toggleDarkMode}
            className={`${
              darkMode ? "text-white" : "text-black"
            } focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1`}
            aria-label={
              darkMode ? "Activer le mode clair" : "Activer le mode sombre"
            }
            aria-pressed={darkMode}
          >
            {darkMode ? (
              <FaSun size={24} aria-hidden="true" />
            ) : (
              <FaMoon size={24} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          id="mobile-menu"
          className={`md:hidden ${
            darkMode ? "bg-gray-900" : "bg-white"
          } px-6 pb-4`}
          role="menu"
        >
          <div className="flex justify-start items-center mb-4">
            <Link
              to="/"
              className={`${
                darkMode ? "text-white" : "text-black"
              } text-xl font-semibold hover:text-gray-500 transition-colors duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2`}
              onClick={() => setIsOpen(false)}
              aria-label="Retour à l'accueil - Adrien Le Guen"
            >
              ADRIEN LE GUEN
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => handleScrollTo("présentation")}
              className={`${
                darkMode ? "text-white" : "text-black"
              } text-left py-2 px-3 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500`}
              role="menuitem"
              aria-label="Aller à la section Présentation"
            >
              Présentation
            </button>
            <button
              onClick={() => handleScrollTo("projets")}
              className={`${
                darkMode ? "text-white" : "text-black"
              } text-left py-2 px-3 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500`}
              role="menuitem"
              aria-label="Aller à la section Projets"
            >
              Projets
            </button>
            <button
              onClick={() => handleScrollTo("contact")}
              className={`${
                darkMode ? "text-white" : "text-black"
              } text-left py-2 px-3 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500`}
              role="menuitem"
              aria-label="Aller à la section Contact"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
