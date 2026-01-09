import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import { FaCode } from "react-icons/fa";

const LanguageChart = ({ topLanguages }) => {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const getLanguageColor = (lang) => {
    const colors = {
      JavaScript: "#F7DF1E",
      TypeScript: "#3178C6",
      Python: "#3776AB",
      Java: "#E34F26",
      HTML: "#E34F26",
      CSS: "#1572B6",
      React: "#61DAFB",
      "C++": "#F34B7D",
      C: "#555555",
      PHP: "#777BB4",
    };
    return colors[lang] || "#888888";
  };

  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-dark-accent/10 rounded-lg">
          <FaCode className="text-2xl text-dark-accent" />
        </div>
        <h2
          className={`text-2xl font-bold ${
            darkMode ? "text-dark-text" : "text-light-text"
          }`}
        >
          {language === "fr" ? "Top Langages" : "Top Languages"}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topLanguages.map((lang, index) => {
          const color = getLanguageColor(lang.language);

          return (
            <motion.div
              key={lang.language}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden ${
                darkMode
                  ? "bg-dark-surface/40 border-white/5"
                  : "bg-light-surface/60 border-gray-200"
              } backdrop-blur-md border rounded-xl p-5 group hover:border-dark-accent/30 transition-colors duration-300`}
            >
              <div className="flex justify-between items-end mb-3 relative z-10">
                <span
                  className={`text-lg font-bold ${
                    darkMode ? "text-dark-text" : "text-light-text"
                  }`}
                >
                  {lang.language}
                </span>
                <span
                  className={`text-2xl font-black ${
                    darkMode ? "text-white" : "text-gray-800"
                  } opacity-80`}
                >
                  {lang.percentage}%
                </span>
              </div>

              {/* Progress Bar Container */}
              <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${lang.percentage}%` }}
                  transition={{
                    duration: 1,
                    delay: 0.5 + index * 0.1,
                    ease: "easeOut",
                  }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: color }}
                />
              </div>

              {/* Background Glow */}
              <div
                className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full opacity-10 blur-2xl transition-transform duration-500 group-hover:scale-150"
                style={{ backgroundColor: color }}
              ></div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageChart;
