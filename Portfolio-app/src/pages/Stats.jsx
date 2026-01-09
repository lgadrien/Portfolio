import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { useGithubStats } from "../hooks/useGithubStats";
import StatCard from "../Components/Stats/StatCard";
import LanguageChart from "../Components/Stats/LanguageChart";
import RepoList from "../Components/Stats/RepoList";
import ProfileInfo from "../Components/Stats/ProfileInfo";
import MetricsGrid from "../Components/Stats/MetricsGrid";
import ContributionGraph from "../Components/Stats/ContributionGraph";
import ActivityFeed from "../Components/Stats/ActivityFeed";
import {
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaUsers,
  FaEye,
  FaCalendar,
} from "react-icons/fa";

const Stats = () => {
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
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg pt-24 pb-12 px-4 flex flex-col justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-dark-accent mb-4"></div>
        <p className="text-lg text-light-text-secondary dark:text-gray-400">
          {t?.stats?.loading || "Chargement..."}
        </p>
      </div>
    );
  }

  if (error || !githubStats) {
    return (
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg pt-24 pb-12 px-4 flex justify-center items-center">
        <div className="text-center text-xl text-light-text-secondary dark:text-gray-400">
          {t?.stats?.error || "Impossible de charger les statistiques GitHub"}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 text-light-text dark:text-dark-text">
          <span className="text-light-accent dark:text-dark-accent">
            {t?.stats?.title || "Statistiques & Projets GitHub"}
          </span>
        </h1>
        <p className="text-center text-xl mb-12 text-light-text-secondary dark:text-gray-400">
          {t?.stats?.subtitle ||
            "Mes statistiques GitHub et l'évolution de mes projets"}
        </p>

        {/* Profile Info Section */}
        <ProfileInfo stats={githubStats} />

        {/* GitHub Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard
            icon={<FaCodeBranch />}
            title={t?.stats?.publicRepos || "Dépôts publics"}
            value={githubStats.publicRepos}
            color="text-blue-500"
            delay={0.1}
          />
          <StatCard
            icon={<FaStar />}
            title={t?.stats?.totalStars || "Stars totales"}
            value={githubStats.totalStars}
            color="text-yellow-500"
            delay={0.2}
          />
          <StatCard
            icon={<FaUsers />}
            title={t?.stats?.followers || "Followers"}
            value={githubStats.followers}
            color="text-green-500"
            delay={0.3}
          />
          <StatCard
            icon={<FaEye />}
            title={language === "fr" ? "Watchers" : "Watchers"}
            value={githubStats.totalWatchers}
            color="text-cyan-500"
            delay={0.4}
          />
        </div>

        {/* Advanced Metrics */}
        <MetricsGrid stats={githubStats} />

        {/* Contribution Calendar */}
        <ContributionGraph username="lgadrien" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Langages */}
          <LanguageChart topLanguages={githubStats.topLanguages} />

          {/* Activity Feed */}
          <ActivityFeed activity={githubStats.recentActivity} />
        </div>

        {/* Filtre de projets */}

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
            <h2 className="text-3xl font-bold mb-6 text-light-text dark:text-dark-text">
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
                  className="bg-light-surface border-light-accent dark:bg-dark-surface dark:border-dark-accent border-l-4 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 group"
                >
                  <h3 className="text-lg font-bold mb-2 text-light-text dark:text-dark-text group-hover:text-light-accent dark:group-hover:text-dark-accent">
                    {repo.name}
                  </h3>
                  <p className="text-sm mb-3 text-light-text-secondary dark:text-gray-400">
                    {repo.description?.substring(0, 100) || "No description"}...
                  </p>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500 dark:text-gray-500">
                      {new Date(repo.created_at).toLocaleDateString(
                        language === "fr" ? "fr-FR" : "en-US"
                      )}
                    </span>
                    <span className="text-yellow-600 dark:text-yellow-400">
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
            className="inline-flex items-center gap-3 bg-light-accent text-white hover:bg-light-hover hover:text-white dark:bg-dark-accent dark:text-dark-bg dark:hover:bg-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
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
