import { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { useScrollToSection } from "../hooks/useScrollToSection";

const NavBar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const { language, toggleLanguage, t } = useContext(LanguageContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { scrollToSection } = useScrollToSection();

  const handleNavigation = (sectionId) => {
    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      navigate("/", { state: { targetId: sectionId } });
    }
  };

  return (
    <nav
      className="fixed w-full top-0 z-50 transition-all duration-300 py-4"
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="mx-4 md:mx-auto max-w-7xl rounded-2xl px-6 py-3 flex justify-between items-center transition-all duration-300 bg-white/70 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] dark:bg-custom-black/70 dark:border-white/10 dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-xl">
        {/* Logo / Name */}
        <div className="flex items-center">
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("présentation");
            }}
            className="text-xl font-bold tracking-tight transition-all duration-300 hover:scale-105 cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-custom-purple-dark to-purple-600 dark:from-white dark:to-gray-400"
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
                onClick={() => handleNavigation(section)}
                className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative group text-gray-700 hover:text-custom-purple-dark hover:bg-purple-500/10 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/10"
              >
                {section === "techskills"
                  ? t.nav.skills || "Compétences"
                  : t.nav[section]}
              </button>
            )
          )}

          <Link
            to="/stats"
            className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative group ml-1 text-gray-700 hover:text-custom-purple-dark hover:bg-purple-500/10 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/10"
          >
            {t.nav.stats || "Stats & Projets"}
          </Link>

          {/* Separator - Only for Desktop */}
          <div className="h-6 w-px mx-4 bg-black/10 dark:bg-white/20"></div>
        </nav>

        {/* Actions (Lang + Theme) - Always visible */}
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-xl transition-all duration-300 hover:scale-105 bg-black/5 hover:bg-black/10 text-custom-purple-dark border border-black/5 dark:bg-white/5 dark:hover:bg-white/10 dark:text-white dark:border-white/5"
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
            className="p-2 rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-12 text-purple-600 bg-black/5 hover:bg-black/10 border border-black/5 dark:text-yellow-400 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/5"
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
