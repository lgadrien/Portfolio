import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import { FaCalendarAlt } from "react-icons/fa";

const ContributionGraph = ({ username }) => {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  // Couleurs pour le graph (Violet d'accentuation)
  // On utilise l'API ghchart qui permet de personnaliser la couleur
  // Couleur : 8B5CF6 (Purple 500/600 de Tailwind)
  const chartColor = "8B5CF6";

  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-dark-accent/10 rounded-lg">
          <FaCalendarAlt className="text-2xl text-dark-accent" />
        </div>
        <h2
          className={`text-2xl font-bold ${
            darkMode ? "text-dark-text" : "text-light-text"
          }`}
        >
          {language === "fr"
            ? "Calendrier de Contributions"
            : "Contribution Calendar"}
        </h2>
      </div>

      <div
        className={`w-full overflow-hidden rounded-2xl border p-4 shadow-lg transition-all duration-300 hover:shadow-2xl ${
          darkMode
            ? "bg-dark-surface/40 border-white/5"
            : "bg-light-surface/60 border-gray-200"
        } backdrop-blur-md`}
      >
        <div className="w-full overflow-x-auto">
          <img
            src={`https://ghchart.rshah.io/${chartColor}/${username}`}
            alt={`${username}'s Github chart`}
            className="w-full min-w-[700px]"
          />
        </div>
        <div
          className={`mt-4 text-sm text-center ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {language === "fr"
            ? "Données fournies par GitHub"
            : "Data provided by GitHub"}
        </div>
      </div>
    </div>
  );
};

export default ContributionGraph;
