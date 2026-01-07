import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { useGithubStats } from "../hooks/useGithubStats";
import StatCard from "./Stats/StatCard";
import LanguageChart from "./Stats/LanguageChart";
import RepoList from "./Stats/RepoList";
import {
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaUsers,
  FaEye,
  FaCalendar,
  FaChartLine,
  FaCode,
} from "react-icons/fa";

const Stats = () => {
  const { darkMode } = useContext(ThemeContext);
  const { t, language } = useContext(LanguageContext);
  const { stats: githubStats, loading, error } = useGithubStats("lgadrien");
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  useEffect(() => {
    // Désactiver la restauration automatique du scroll
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Utiliser un micro-délai pour s'assurer que le DOM est prêt
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);

    return () => {
      clearTimeout(timer);
      // Réactiver la restauration par défaut en quittant
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  if (loading) {
    return (
      <div
        className={`min-h-screen ${
          darkMode ? "bg-dark-bg" : "bg-light-bg"
        } pt-24 pb-12 px-4 flex flex-col justify-center items-center`}
      >
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-custom-purple-light mb-4"></div>
        <p
          className={`text-lg ${
            darkMode ? "text-gray-400" : "text-light-text-secondary"
          }`}
        >
          {t?.stats?.loading || "Chargement..."}
        </p>
      </div>
    );
  }

  if (error || !githubStats) {
    return (
      <div
        className={`min-h-screen ${
          darkMode ? "bg-dark-bg" : "bg-light-bg"
        } pt-24 pb-12 px-4 flex justify-center items-center`}
      >
        <div
          className={`text-center text-xl ${
            darkMode ? "text-gray-400" : "text-light-text-secondary"
          }`}
        >
          {t?.stats?.error || "Impossible de charger les statistiques GitHub"}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-dark-bg" : "bg-light-bg"
      } pt-24 pb-12 px-4`}
    >
      <div className="max-w-7xl mx-auto">
        <h1
          className={`text-5xl font-bold text-center mb-4 ${
            darkMode ? "text-dark-text" : "text-light-text"
          }`}
        >
          <span className={darkMode ? "text-dark-accent" : "text-light-accent"}>
            {t?.stats?.title || "Statistiques & Projets GitHub"}
          </span>
        </h1>
        <p
          className={`text-center text-xl mb-12 ${
            darkMode ? "text-gray-400" : "text-light-text-secondary"
          }`}
        >
          {t?.stats?.subtitle ||
            "Mes statistiques GitHub et l'évolution de mes projets"}
        </p>

        {/* Profile Info Section */}
        {(githubStats.bio || githubStats.location || githubStats.company) && (
          <div
            className={`${
              darkMode
                ? "bg-dark-surface border-gray-800"
                : "bg-light-surface border-gray-200"
            } border-2 rounded-xl p-8 mb-12 shadow-lg`}
          >
            <h2
              className={`text-2xl font-bold mb-4 ${
                darkMode ? "text-dark-text" : "text-light-text"
              }`}
            >
              👤 {language === "fr" ? "Profil" : "Profile"}
            </h2>
            {githubStats.bio && (
              <p
                className={`mb-3 text-lg ${
                  darkMode ? "text-gray-300" : "text-light-text"
                }`}
              >
                {githubStats.bio}
              </p>
            )}
            <div className="flex flex-wrap gap-6 text-sm">
              {githubStats.location && (
                <span
                  className={`${
                    darkMode ? "text-gray-400" : "text-light-text-secondary"
                  }`}
                >
                  📍 {githubStats.location}
                </span>
              )}
              {githubStats.company && (
                <span
                  className={`${
                    darkMode ? "text-gray-400" : "text-light-text-secondary"
                  }`}
                >
                  🏢 {githubStats.company}
                </span>
              )}
              <span
                className={`${
                  darkMode ? "text-gray-400" : "text-light-text-secondary"
                }`}
              >
                ⏱️ {githubStats.yearsActive}{" "}
                {language === "fr" ? "ans d'activité" : "years active"}
              </span>
            </div>
          </div>
        )}

        {/* GitHub Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard
            icon={<FaCodeBranch />}
            title={t?.stats?.publicRepos || "Dépôts publics"}
            value={githubStats.publicRepos}
            color="text-blue-500"
          />
          <StatCard
            icon={<FaStar />}
            title={t?.stats?.totalStars || "Stars totales"}
            value={githubStats.totalStars}
            color="text-yellow-500"
          />
          <StatCard
            icon={<FaUsers />}
            title={t?.stats?.followers || "Followers"}
            value={githubStats.followers}
            color="text-green-500"
          />
          <StatCard
            icon={<FaEye />}
            title={language === "fr" ? "Watchers" : "Watchers"}
            value={githubStats.totalWatchers}
            color="text-cyan-500"
          />
        </div>

        {/* Advanced Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div
            className={`${
              darkMode
                ? "bg-dark-surface border-gray-800"
                : "bg-light-surface border-gray-200"
            } border-2 rounded-xl p-6 shadow-lg`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3
                  className={`text-lg font-semibold ${
                    darkMode ? "text-gray-400" : "text-light-text-secondary"
                  }`}
                >
                  {language === "fr" ? "Forks totaux" : "Total Forks"}
                </h3>
                <p
                  className={`text-3xl font-bold mt-2 ${
                    darkMode ? "text-dark-text" : "text-light-text"
                  }`}
                >
                  {githubStats.totalForks}
                </p>
              </div>
              <FaCodeBranch className="text-4xl text-purple-500" />
            </div>
          </div>

          <div
            className={`${
              darkMode
                ? "bg-dark-surface border-gray-800"
                : "bg-light-surface border-gray-200"
            } border-2 rounded-xl p-6 shadow-lg`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3
                  className={`text-lg font-semibold ${
                    darkMode ? "text-gray-400" : "text-light-text-secondary"
                  }`}
                >
                  {language === "fr" ? "Moyenne par repo" : "Avg per Repo"}
                </h3>
                <p
                  className={`text-3xl font-bold mt-2 ${
                    darkMode ? "text-dark-text" : "text-light-text"
                  }`}
                >
                  {githubStats.averageStarsPerRepo}
                  <span className="text-lg ml-1">⭐</span>
                </p>
              </div>
              <FaChartLine className="text-4xl text-green-500" />
            </div>
          </div>

          <div
            className={`${
              darkMode
                ? "bg-dark-surface border-gray-800"
                : "bg-light-surface border-gray-200"
            } border-2 rounded-xl p-6 shadow-lg`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3
                  className={`text-lg font-semibold ${
                    darkMode ? "text-gray-400" : "text-light-text-secondary"
                  }`}
                >
                  {language === "fr" ? "Repos documentés" : "Documented Repos"}
                </h3>
                <p
                  className={`text-3xl font-bold mt-2 ${
                    darkMode ? "text-dark-text" : "text-light-text"
                  }`}
                >
                  {githubStats.reposWithDescription} / {githubStats.publicRepos}
                </p>
              </div>
              <FaCode className="text-4xl text-dark-accent" />
            </div>
          </div>
        </div>

        {/* Langages les plus utilisés */}
        <LanguageChart topLanguages={githubStats.topLanguages} />

        {/* Filtre de projets */}
        <RepoList
          repos={githubStats.allRepos}
          allLanguages={githubStats.allLanguages}
          selectedLanguage={selectedLanguage}
          onLanguageChange={setSelectedLanguage}
          totalRepos={githubStats.publicRepos}
        />

        {/* Recent Projects Section */}
        {githubStats.recentRepos && githubStats.recentRepos.length > 0 && (
          <div className="mb-8">
            <h2
              className={`text-3xl font-bold mb-6 ${
                darkMode ? "text-dark-text" : "text-light-text"
              }`}
            >
              <FaCalendar className="inline mr-3 text-cyan-500" />
              {language === "fr" ? "Projets récents" : "Recent Projects"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {githubStats.recentRepos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    darkMode
                      ? "bg-dark-surface border-dark-accent"
                      : "bg-light-surface border-light-accent"
                  } border-l-4 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 group`}
                >
                  <h3
                    className={`text-lg font-bold mb-2 group-hover:${
                      darkMode ? "text-dark-accent" : "text-light-accent"
                    } ${darkMode ? "text-dark-text" : "text-light-text"}`}
                  >
                    {repo.name}
                  </h3>
                  <p
                    className={`text-sm mb-3 ${
                      darkMode ? "text-gray-400" : "text-light-text-secondary"
                    }`}
                  >
                    {repo.description?.substring(0, 100) || "No description"}...
                  </p>
                  <div className="flex justify-between items-center text-xs">
                    <span
                      className={`${
                        darkMode ? "text-gray-500" : "text-gray-500"
                      }`}
                    >
                      {new Date(repo.created_at).toLocaleDateString(
                        language === "fr" ? "fr-FR" : "en-US"
                      )}
                    </span>
                    <span
                      className={`${
                        darkMode ? "text-yellow-400" : "text-yellow-600"
                      }`}
                    >
                      ⭐ {repo.stargazers_count}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* GitHub Profile Link */}
        <div className="text-center mt-12">
          <a
            href={`https://github.com/lgadrien`}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-3 ${
              darkMode
                ? "bg-dark-accent text-dark-bg hover:bg-white"
                : "bg-light-accent text-white hover:bg-light-hover hover:text-white"
            } font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105`}
          >
            <FaGithub size={24} />
            {t?.stats?.viewGithub || "Voir mon profil GitHub complet"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Stats;
