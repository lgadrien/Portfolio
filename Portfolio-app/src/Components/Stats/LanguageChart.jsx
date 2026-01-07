import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import { FaCode } from "react-icons/fa";

const LanguageChart = ({ topLanguages }) => {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const getLanguageColor = (lang) => {
    const colors = {
      JavaScript: "bg-yellow-400",
      TypeScript: "bg-blue-500",
      Python: "bg-blue-600",
      Java: "bg-red-500",
      HTML: "bg-orange-500",
      CSS: "bg-blue-400",
      React: "bg-cyan-400",
      "C++": "bg-pink-500",
      C: "bg-gray-600",
      PHP: "bg-purple-500",
    };
    return colors[lang] || "bg-gray-500";
  };

  return (
    <div className="mb-12">
      <h2
        className={`text-3xl font-bold mb-6 ${
          darkMode ? "text-dark-text" : "text-light-text"
        }`}
      >
        <FaCode className="inline mr-3 text-dark-accent" />
        {language === "fr"
          ? "Langages les plus utilisés"
          : "Most used languages"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {topLanguages.map((lang, index) => (
          <div
            key={index}
            className={`${
              darkMode
                ? "bg-dark-surface border-gray-800"
                : "bg-light-surface border-gray-200"
            } border-2 rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105`}
          >
            <div className="flex items-center justify-between mb-3">
              <span
                className={`text-lg font-bold ${
                  darkMode ? "text-dark-text" : "text-light-text"
                }`}
              >
                {lang.language}
              </span>
              <span
                className={`text-sm font-semibold ${
                  darkMode ? "text-gray-400" : "text-light-text-secondary"
                }`}
              >
                {lang.percentage}%
              </span>
            </div>
            <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`absolute h-full ${getLanguageColor(
                  lang.language
                )} transition-all duration-1000`}
                style={{ width: `${lang.percentage}%` }}
              ></div>
            </div>
            <div
              className={`mt-2 text-sm ${
                darkMode ? "text-gray-400" : "text-light-text-secondary"
              }`}
            >
              {lang.count} {language === "fr" ? "projets" : "projects"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageChart;
