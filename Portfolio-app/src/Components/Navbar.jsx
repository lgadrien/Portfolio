import { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";

const NavBar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const { language, toggleLanguage, t } = useContext(LanguageContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollTo = (sectionId) => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

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
      const offset = navbarHeight + 16;

      window.scrollTo({
        top: sectionTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 py-4`}
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
        {/* Logo / Name */}
        <div className="flex items-center">
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("présentation");
            }}
            className={`text-xl font-bold tracking-tight transition-all duration-300 hover:scale-105 cursor-pointer ${
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
          className="hidden md:flex ml-auto items-center space-x-1 mr-4"
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

          {/* Separator - Only for Desktop */}
          <div
            className={`h-6 w-px mx-4 ${
              darkMode ? "bg-white/20" : "bg-black/10"
            }`}
          ></div>
        </nav>

        {/* Actions (Lang + Theme) - Always visible */}
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
      </div>
    </nav>
  );
};

export default NavBar;
