import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import {
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaUsers,
  FaCode,
  FaFire,
} from "react-icons/fa";

const Stats = () => {
  const { darkMode } = useContext(ThemeContext);
  const { t, language } = useContext(LanguageContext);
  const [githubStats, setGithubStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const username = "lgadrien";

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

  useEffect(() => {
    const fetchGithubStats = async () => {
      try {
        const headers = import.meta.env.VITE_GITHUB_TOKEN
          ? { Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}` }
          : {};

        const userResponse = await fetch(
          `https://api.github.com/users/${username}`,
          { headers }
        );
        const userData = await userResponse.json();

        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100`,
          { headers }
        );
        const reposData = await reposResponse.json();

        const totalStars = reposData.reduce(
          (acc, repo) => acc + repo.stargazers_count,
          0
        );
        const totalForks = reposData.reduce(
          (acc, repo) => acc + repo.forks_count,
          0
        );

        // Calculer les langages les plus utilisés
        const languageCount = {};
        reposData.forEach((repo) => {
          if (repo.language) {
            languageCount[repo.language] =
              (languageCount[repo.language] || 0) + 1;
          }
        });

        const topLanguages = Object.entries(languageCount)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([language, count]) => ({
            language,
            count,
            percentage: ((count / reposData.length) * 100).toFixed(1),
          }));

        // Récupérer tous les langages uniques pour le filtre
        const allLanguages = [
          "All",
          ...new Set(reposData.map((repo) => repo.language).filter(Boolean)),
        ];

        setGithubStats({
          publicRepos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          totalStars,
          totalForks,
          topLanguages,
          allLanguages,
          topRepos: reposData
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 6),
          allRepos: reposData,
        });
        setLoading(false);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des stats GitHub:",
          error
        );
        setLoading(false);
      }
    };

    fetchGithubStats();
  }, []);

  const StatCard = ({ icon, title, value, color }) => (
    <div
      className={`${
        darkMode
          ? "bg-dark-surface border-gray-800"
          : "bg-light-surface border-gray-200"
      } border-2 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1`}
    >
      <div className={`flex items-center justify-between mb-4`}>
        <div className={`${color} text-4xl`}>{icon}</div>
        <div
          className={`text-4xl font-bold ${
            darkMode ? "text-dark-text" : "text-light-text"
          }`}
        >
          {value}
        </div>
      </div>
      <h3
        className={`text-lg font-semibold ${
          darkMode ? "text-gray-400" : "text-light-text-secondary"
        }`}
      >
        {title}
      </h3>
    </div>
  );

  const getLanguageColor = (language) => {
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
    return colors[language] || "bg-gray-500";
  };

  const filteredRepos =
    selectedLanguage === "All"
      ? githubStats?.allRepos || []
      : githubStats?.allRepos.filter(
          (repo) => repo.language === selectedLanguage
        ) || [];

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
            {t?.stats?.title || "Statistiques & Métriques"}
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

        {loading ? (
          <div className="flex flex-col justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-custom-purple-light mb-4"></div>
            <p
              className={`text-lg ${
                darkMode ? "text-gray-400" : "text-light-text-secondary"
              }`}
            >
              {t?.stats?.loading || "Chargement..."}
            </p>
          </div>
        ) : githubStats ? (
          <>
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
                icon={<FaCodeBranch />}
                title={t?.stats?.totalForks || "Forks totaux"}
                value={githubStats.totalForks}
                color="text-purple-500"
              />
            </div>

            {/* Langages les plus utilisés */}
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
                {githubStats.topLanguages.map((lang, index) => (
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
                          darkMode
                            ? "text-gray-400"
                            : "text-light-text-secondary"
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

            {/* Filtre de projets */}
            <div className="mb-8">
              <h2
                className={`text-3xl font-bold mb-6 ${
                  darkMode ? "text-dark-text" : "text-light-text"
                }`}
              >
                <FaFire className="inline mr-3 text-orange-500" />
                {language === "fr" ? "Tous les projets" : "All projects"}
              </h2>
              <div className="flex flex-wrap gap-3 mb-6">
                {githubStats.allLanguages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
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
                    {lang === "All"
                      ? language === "fr"
                        ? "Tous"
                        : "All"
                      : lang}
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
                      } border-2 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3
                          className={`text-xl font-bold ${
                            darkMode ? "text-dark-text" : "text-light-text"
                          }`}
                        >
                          {repo.name}
                        </h3>
                        <FaGithub
                          className={`text-2xl ${
                            darkMode
                              ? "text-gray-400"
                              : "text-light-text-secondary"
                          }`}
                        />
                      </div>
                      <p
                        className={`mb-4 text-sm ${
                          darkMode
                            ? "text-gray-400"
                            : "text-light-text-secondary"
                        }`}
                      >
                        {repo.description ||
                          t?.stats?.noDescription ||
                          "Pas de description"}
                      </p>
                      <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex items-center gap-1">
                          <FaStar className="text-yellow-500" />
                          <span
                            className={
                              darkMode
                                ? "text-gray-400"
                                : "text-light-text-secondary"
                            }
                          >
                            {repo.stargazers_count}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaCodeBranch className="text-purple-500" />
                          <span
                            className={
                              darkMode
                                ? "text-gray-400"
                                : "text-light-text-secondary"
                            }
                          >
                            {repo.forks_count}
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

            {/* Top Repositories - Supprimé car redondant avec le filtre */}

            {/* GitHub Profile Link */}
            <div className="text-center mt-12">
              <a
                href={`https://github.com/${username}`}
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
          </>
        ) : (
          <div
            className={`text-center text-xl ${
              darkMode ? "text-gray-400" : "text-light-text-secondary"
            }`}
          >
            {t?.stats?.error || "Impossible de charger les statistiques GitHub"}
          </div>
        )}
      </div>
    </div>
  );
};

export default Stats;
