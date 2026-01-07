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
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${"py-4"}`}
      role="navigation"
      aria-label="Navigation principale"
    >
      <div
        className={`mx-4 md:mx-auto max-w-7xl rounded-2xl px-6 py-3 flex justify-between items-center transition-all duration-300 ${
          darkMode
            ? "bg-custom-black/70 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
            : "bg-white/70 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]"
        } backdrop-blur-xl`}
      >
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${
              darkMode ? "text-white" : "text-custom-purple-dark"
            } focus:outline-none focus:ring-2 focus:ring-custom-purple-light rounded-lg p-2 hover:bg-white/10 transition-colors`}
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

        {/* Logo / Name */}
        <div className="flex items-center">
          <Link
            to="/"
            className={`text-xl font-bold tracking-tight transition-all duration-300 hover:scale-105 ${
              darkMode
                ? "text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
                : "text-transparent bg-clip-text bg-gradient-to-r from-custom-purple-dark to-purple-600"
            }`}
            aria-label="Retour à l'accueil - Adrien Le Guen"
          >
            ADRIEN LE GUEN
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex ml-auto items-center space-x-1"
          aria-label="Menu principal"
        >
          {["présentation", "techskills", "timeline", "contact"].map(
            (section) => (
              <button
                key={section}
                onClick={() => handleScrollTo(section)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative group ${
                  darkMode
                    ? "text-gray-300 hover:text-white hover:bg-white/10"
                    : "text-gray-700 hover:text-custom-purple-dark hover:bg-purple-500/10"
                }`}
              >
                {section === "techskills"
                  ? t.nav.skills || "Compétences"
                  : t.nav[section]}
              </button>
            )
          )}

          <Link
            to="/stats"
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative group ml-1 ${
              darkMode
                ? "text-gray-300 hover:text-white hover:bg-white/10"
                : "text-gray-700 hover:text-custom-purple-dark hover:bg-purple-500/10"
            }`}
          >
            {t.nav.stats || "Stats & Projets"}
          </Link>

          {/* Separator */}
          <div
            className={`h-6 w-px mx-4 ${
              darkMode ? "bg-white/20" : "bg-black/10"
            }`}
          ></div>

          {/* Actions (Lang + Theme) */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className={`p-2 rounded-xl transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "bg-white/5 hover:bg-white/10 text-white border border-white/5"
                  : "bg-black/5 hover:bg-black/10 text-custom-purple-dark border border-black/5"
              }`}
              title={
                language === "fr" ? "Switch to English" : "Passer en français"
              }
            >
              <span className="text-lg leading-none">
                {language === "fr" ? "🇫🇷" : "🇬🇧"}
              </span>
            </button>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-12 ${
                darkMode
                  ? "text-yellow-400 bg-white/5 hover:bg-white/10 border border-white/5"
                  : "text-purple-600 bg-black/5 hover:bg-black/10 border border-black/5"
              }`}
              aria-label={
                darkMode ? "Activer le mode clair" : "Activer le mode sombre"
              }
            >
              {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
          </div>
        </nav>
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
