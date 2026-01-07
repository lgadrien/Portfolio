import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import {
  FaFire,
  FaGithub,
  FaCalendar,
  FaStar,
  FaCodeBranch,
  FaEye,
} from "react-icons/fa";

const RepoList = ({
  repos,
  allLanguages,
  selectedLanguage,
  onLanguageChange,
  totalRepos,
}) => {
  const { darkMode } = useContext(ThemeContext);
  const { language, t } = useContext(LanguageContext);

  // Filtrage des repos
  const filteredRepos =
    selectedLanguage === "All"
      ? repos
      : repos.filter((repo) => repo.language === selectedLanguage);

  return (
    <div className="mb-8">
      <h2
        className={`text-3xl font-bold mb-6 ${
          darkMode ? "text-dark-text" : "text-light-text"
        }`}
      >
        <FaFire className="inline mr-3 text-orange-500" />
        {language === "fr" ? "Tous les projets" : "All projects"}
      </h2>
      <div className="flex flex-wrap gap-2 mb-6 border-b-2 border-gray-300 pb-4">
        <button
          onClick={() => onLanguageChange("All")}
          className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
            selectedLanguage === "All"
              ? darkMode
                ? "bg-dark-accent text-dark-bg"
                : "bg-light-accent text-white"
              : darkMode
              ? "text-gray-400 hover:text-dark-text"
              : "text-gray-600 hover:text-light-text"
          }`}
        >
          {language === "fr" ? "Tous les projets" : "All Projects"} (
          {totalRepos})
        </button>
      </div>

      <div className="flex flex-wrap gap-3 mb-6">
        {allLanguages.map((lang) => (
          <button
            key={lang}
            onClick={() => onLanguageChange(lang)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              selectedLanguage === lang
                ? darkMode
                  ? "bg-dark-accent text-dark-bg"
                  : "bg-light-accent text-white"
                : darkMode
                ? "bg-dark-surface text-gray-300 hover:bg-gray-700"
                : "bg-gray-200 text-light-text hover:bg-gray-300"
            }`}
          >
            {lang === "All" ? (language === "fr" ? "Tous" : "All") : lang}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRepos
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                darkMode
                  ? "bg-dark-surface border-gray-800 hover:border-dark-accent"
                  : "bg-light-surface border-gray-200 hover:border-light-accent"
              } border-2 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 group`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3
                  className={`text-xl font-bold group-hover:${
                    darkMode ? "text-dark-accent" : "text-light-accent"
                  } ${darkMode ? "text-dark-text" : "text-light-text"}`}
                >
                  {repo.name}
                </h3>
                <FaGithub
                  className={`text-2xl ${
                    darkMode ? "text-gray-400" : "text-light-text-secondary"
                  }`}
                />
              </div>
              <p
                className={`mb-4 text-sm line-clamp-2 ${
                  darkMode ? "text-gray-400" : "text-light-text-secondary"
                }`}
              >
                {repo.description ||
                  t?.stats?.noDescription ||
                  "Pas de description"}
              </p>

              {/* Additional repo info */}
              <div className="mb-3 flex items-center gap-2 text-xs">
                {repo.created_at && (
                  <span
                    className={`${
                      darkMode ? "text-gray-500" : "text-gray-500"
                    }`}
                  >
                    <FaCalendar className="inline mr-1" />
                    {new Date(repo.created_at).toLocaleDateString(
                      language === "fr" ? "fr-FR" : "en-US"
                    )}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <span
                    className={
                      darkMode ? "text-gray-400" : "text-light-text-secondary"
                    }
                  >
                    {repo.stargazers_count}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <FaCodeBranch className="text-purple-500" />
                  <span
                    className={
                      darkMode ? "text-gray-400" : "text-light-text-secondary"
                    }
                  >
                    {repo.forks_count}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <FaEye className="text-cyan-500" />
                  <span
                    className={
                      darkMode ? "text-gray-400" : "text-light-text-secondary"
                    }
                  >
                    {repo.watchers_count}
                  </span>
                </div>
                {repo.language && (
                  <span
                    className={`px-2 py-1 rounded-lg text-sm font-semibold ${
                      darkMode
                        ? "bg-gray-700 text-gray-300"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {repo.language}
                  </span>
                )}
              </div>
            </a>
          ))}
      </div>
    </div>
  );
};

export default RepoList;
