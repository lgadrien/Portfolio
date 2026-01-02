import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaGithub, FaStar, FaCodeBranch, FaUsers } from "react-icons/fa";

const Stats = () => {
  const { darkMode } = useContext(ThemeContext);
  const [githubStats, setGithubStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const username = "lgadrien";

  useEffect(() => {
    const fetchGithubStats = async () => {
      try {
        const userResponse = await fetch(
          `https://api.github.com/users/${username}`
        );
        const userData = await userResponse.json();

        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100`
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

        setGithubStats({
          publicRepos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          totalStars,
          totalForks,
          topRepos: reposData
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 6),
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
        darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
      } border-2 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
    >
      <div className={`flex items-center justify-between mb-4`}>
        <div className={`${color} text-4xl`}>{icon}</div>
        <div
          className={`text-4xl font-bold ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          {value}
        </div>
      </div>
      <h3
        className={`text-lg font-semibold ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {title}
      </h3>
    </div>
  );

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-custom-black" : "bg-custom-beige"
      } pt-24 pb-12 px-4`}
    >
      <div className="max-w-7xl mx-auto">
        <h1
          className={`text-5xl font-bold text-center mb-4 ${
            darkMode ? "text-white" : "text-custom-black"
          }`}
        >
          Statistiques & Métriques
        </h1>
        <p
          className={`text-center text-xl mb-12 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Mes statistiques GitHub et l'évolution de mes projets
        </p>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-custom-purple-light"></div>
          </div>
        ) : githubStats ? (
          <>
            {/* GitHub Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <StatCard
                icon={<FaCodeBranch />}
                title="Dépôts publics"
                value={githubStats.publicRepos}
                color="text-blue-500"
              />
              <StatCard
                icon={<FaStar />}
                title="Stars totales"
                value={githubStats.totalStars}
                color="text-yellow-500"
              />
              <StatCard
                icon={<FaUsers />}
                title="Followers"
                value={githubStats.followers}
                color="text-green-500"
              />
              <StatCard
                icon={<FaCodeBranch />}
                title="Forks totaux"
                value={githubStats.totalForks}
                color="text-purple-500"
              />
            </div>

            {/* Top Repositories */}
            <div className="mb-12">
              <h2
                className={`text-3xl font-bold mb-6 ${
                  darkMode ? "text-white" : "text-custom-black"
                }`}
              >
                Projets les plus populaires
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {githubStats.topRepos.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      darkMode
                        ? "bg-gray-800 border-gray-700 hover:border-custom-purple-light"
                        : "bg-white border-gray-200 hover:border-custom-purple-dark"
                    } border-2 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3
                        className={`text-xl font-bold ${
                          darkMode ? "text-white" : "text-custom-black"
                        }`}
                      >
                        {repo.name}
                      </h3>
                      <FaGithub
                        className={`text-2xl ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      />
                    </div>
                    <p
                      className={`mb-4 ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {repo.description || "Pas de description"}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-500" />
                        <span
                          className={
                            darkMode ? "text-gray-300" : "text-gray-600"
                          }
                        >
                          {repo.stargazers_count}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaCodeBranch className="text-purple-500" />
                        <span
                          className={
                            darkMode ? "text-gray-300" : "text-gray-600"
                          }
                        >
                          {repo.forks_count}
                        </span>
                      </div>
                      {repo.language && (
                        <span
                          className={`px-2 py-1 rounded text-sm ${
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

            {/* GitHub Profile Link */}
            <div className="text-center">
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-3 ${
                  darkMode
                    ? "bg-custom-purple-light text-custom-black hover:bg-white"
                    : "bg-custom-purple-dark text-white hover:bg-custom-purple-light"
                } font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105`}
              >
                <FaGithub size={24} />
                Voir mon profil GitHub complet
              </a>
            </div>
          </>
        ) : (
          <div
            className={`text-center text-xl ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Impossible de charger les statistiques GitHub
          </div>
        )}
      </div>
    </div>
  );
};

export default Stats;
