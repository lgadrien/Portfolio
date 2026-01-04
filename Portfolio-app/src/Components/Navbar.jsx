import { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";

const NavBar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const { language, toggleLanguage, t } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollTo = (sectionId) => {
    setIsOpen(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    // Si nous ne sommes pas sur la page d'accueil, naviguer d'abord
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        if (sectionId === "présentation") {
          scrollToTop();
        } else {
          scrollToSection(sectionId);
        }
      }, 300);
    } else {
      if (sectionId === "présentation") {
        scrollToTop();
      } else {
        scrollToSection(sectionId);
      }
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop =
        section.getBoundingClientRect().top + window.pageYOffset;

      const navbar = document.querySelector(".navbar-wrapper");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const offset = navbarHeight + 16; // petit marge sous la navbar

      window.scrollTo({
        top: sectionTop - offset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (isOpen) document.body.classList.add("menu-open");
    else document.body.classList.remove("menu-open");
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  return (
    <nav
      className={`fixed w-full top-0 z-50 ${
        darkMode ? "bg-custom-black" : "bg-custom-beige"
      } shadow-md navbar-wrapper`}
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="flex justify-between items-center py-4 px-6 md:px-20">
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${
              darkMode ? "text-white" : "text-custom-purple-dark"
            } focus:outline-none focus:ring-2 focus:ring-custom-purple-light rounded p-1`}
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
              darkMode ? "text-white" : "text-custom-purple-dark"
            } text-xl font-semibold hover:text-custom-purple-light transition-colors duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-custom-purple-light rounded px-2`}
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
              darkMode ? "text-white" : "text-custom-purple-dark"
            } px-3 py-2 hover:text-custom-purple-light focus:outline-none focus:ring-2 focus:ring-custom-purple-light rounded`}
            aria-label="Aller à la section Présentation"
          >
            {t.nav.presentation}
          </button>
          <button
            onClick={() => handleScrollTo("techskills")}
            className={`${
              darkMode ? "text-white" : "text-custom-purple-dark"
            } px-3 py-2 hover:text-custom-purple-light focus:outline-none focus:ring-2 focus:ring-custom-purple-light rounded`}
            aria-label="Aller à la section Compétences"
          >
            {t.nav.skills || "Compétences"}
          </button>
          <button
            onClick={() => handleScrollTo("timeline")}
            className={`${
              darkMode ? "text-white" : "text-custom-purple-dark"
            } px-3 py-2 hover:text-custom-purple-light focus:outline-none focus:ring-2 focus:ring-custom-purple-light rounded`}
            aria-label="Aller à la section Parcours"
          >
            {t.nav.timeline}
          </button>
          <Link
            to="/stats"
            onClick={() => setIsOpen(false)}
            className={`${
              darkMode ? "text-white" : "text-custom-purple-dark"
            } px-3 py-2 hover:text-custom-purple-light focus:outline-none focus:ring-2 focus:ring-custom-purple-light rounded`}
            aria-label="Aller à la page Stats"
          >
            {t.nav.stats || "Stats & Projets"}
          </Link>
          <button
            onClick={() => handleScrollTo("contact")}
            className={`${
              darkMode ? "text-white" : "text-custom-purple-dark"
            } px-3 py-2 hover:text-custom-purple-light focus:outline-none focus:ring-2 focus:ring-custom-purple-light rounded`}
            aria-label="Aller à la section Contact"
          >
            {t.nav.contact}
          </button>
        </nav>
        <div className="flex items-center ml-6 space-x-3">
          <button
            onClick={toggleLanguage}
            className={`${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700 text-white"
                : "bg-gray-100 hover:bg-gray-200 text-custom-purple-dark"
            } focus:outline-none focus:ring-2 focus:ring-custom-purple-light rounded-lg px-3 py-2 font-semibold flex items-center gap-2 hover:scale-105 transform hover:transition-transform hover:duration-200`}
            aria-label={`Changer la langue en ${
              language === "fr" ? "English" : "Français"
            }`}
            title={
              language === "fr" ? "Switch to English" : "Passer en français"
            }
          >
            <span className="text-lg">{language === "fr" ? "🇫🇷" : "🇬🇧"}</span>
            <span className="text-sm font-bold">
              {language === "fr" ? "FR" : "EN"}
            </span>
          </button>
          <button
            onClick={toggleDarkMode}
            className={`${
              darkMode ? "text-white" : "text-custom-purple-dark"
            } focus:outline-none focus:ring-2 focus:ring-custom-purple-light rounded p-1`}
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
            darkMode ? "bg-custom-black" : "bg-custom-beige"
          } px-6 pb-4`}
          role="menu"
        >
          <div className="flex justify-start items-center mb-4">
            <Link
              to="/"
              className={`${
                darkMode ? "text-white" : "text-custom-purple-dark"
              } text-xl font-semibold hover:text-custom-purple-light focus:outline-none focus:ring-2 focus:ring-custom-purple-light rounded px-2`}
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
                darkMode ? "text-white" : "text-custom-purple-dark"
              } text-left py-2 px-3 rounded ${
                darkMode ? "hover:bg-custom-dark" : "hover:bg-light-surface"
              } focus:outline-none focus:ring-2 focus:ring-custom-purple-light`}
              role="menuitem"
              aria-label="Aller à la section Présentation"
            >
              {t.nav.presentation}
            </button>
            <button
              onClick={() => handleScrollTo("techskills")}
              className={`${
                darkMode ? "text-white" : "text-custom-purple-dark"
              } text-left py-2 px-3 rounded ${
                darkMode ? "hover:bg-custom-dark" : "hover:bg-light-surface"
              } focus:outline-none focus:ring-2 focus:ring-custom-purple-light`}
              role="menuitem"
              aria-label="Aller à la section Compétences"
            >
              {t.nav.skills || "Compétences"}
            </button>
            <button
              onClick={() => handleScrollTo("timeline")}
              className={`${
                darkMode ? "text-white" : "text-custom-purple-dark"
              } text-left py-2 px-3 rounded ${
                darkMode ? "hover:bg-custom-dark" : "hover:bg-light-surface"
              } focus:outline-none focus:ring-2 focus:ring-custom-purple-light`}
              role="menuitem"
              aria-label="Aller à la section Parcours"
            >
              {t.nav.timeline}
            </button>
            <Link
              to="/stats"
              onClick={() => setIsOpen(false)}
              className={`${
                darkMode ? "text-white" : "text-custom-purple-dark"
              } text-left py-2 px-3 rounded ${
                darkMode ? "hover:bg-custom-dark" : "hover:bg-light-surface"
              } focus:outline-none focus:ring-2 focus:ring-custom-purple-light`}
              role="menuitem"
              aria-label="Aller à la page Stats"
            >
              {t.nav.stats}
            </Link>
            <button
              onClick={() => handleScrollTo("contact")}
              className={`${
                darkMode ? "text-white" : "text-custom-purple-dark"
              } text-left py-2 px-3 rounded ${
                darkMode ? "hover:bg-custom-dark" : "hover:bg-light-surface"
              } focus:outline-none focus:ring-2 focus:ring-custom-purple-light`}
              role="menuitem"
              aria-label="Aller à la section Contact"
            >
              {t.nav.contact}
            </button>
            <button
              onClick={toggleLanguage}
              className={`${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-custom-purple-dark"
              } text-left py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-purple-light flex items-center gap-2`}
              role="menuitem"
              aria-label={`Changer la langue en ${
                language === "fr" ? "English" : "Français"
              }`}
            >
              <span className="text-lg">{language === "fr" ? "🇫🇷" : "🇬🇧"}</span>
              <span className="text-sm font-bold">
                {language === "fr" ? "Français" : "English"}
              </span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
