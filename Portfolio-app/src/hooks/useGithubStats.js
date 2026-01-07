import { useState, useEffect } from "react";
import logger from "../utils/logger";

export const useGithubStats = (username) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGithubStats = async () => {
      try {
        setLoading(true);
        let userData;
        let reposData;

        if (import.meta.env.DEV) {
          // En développement local : appel direct à l'API GitHub (pas de token)
          const userResponse = await fetch(
            `https://api.github.com/users/${username}`
          );
          const reposResponse = await fetch(
            `https://api.github.com/users/${username}/repos?per_page=100`
          );

          if (!userResponse.ok || !reposResponse.ok) {
            throw new Error("Failed to fetch GitHub stats from GitHub API");
          }

          userData = await userResponse.json();
          reposData = await reposResponse.json();
        } else {
          // En production : passer par la fonction serverless sur Vercel
          const response = await fetch(
            `/api/github-stats?username=${username}`
          );
          if (!response.ok) {
            throw new Error(
              `Failed to fetch GitHub stats from serverless API: ${response.status}`
            );
          }

          const data = await response.json();
          userData = data.user;
          reposData = data.repos;
        }

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

        // Calculer la date du compte
        const accountAge = new Date(userData.created_at);
        const yearsActive = (
          (new Date() - accountAge) /
          (1000 * 60 * 60 * 24 * 365)
        ).toFixed(1);

        // Calculer les repos avec description
        const reposWithDescription = reposData.filter(
          (repo) => repo.description
        ).length;

        // Calculer le nombre de watchers total
        const totalWatchers = reposData.reduce(
          (acc, repo) => acc + repo.watchers_count,
          0
        );

        // Trier les repos par date de création (les plus récents en premier)
        const recentRepos = [...reposData]
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .slice(0, 6);

        setStats({
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
          recentRepos,
          yearsActive,
          reposWithDescription,
          totalWatchers,
          averageStarsPerRepo: (totalStars / reposData.length).toFixed(1),
          bio: userData.bio,
          location: userData.location,
          allRepos: reposData,
          company: userData.company,
        });
        setLoading(false);
      } catch (err) {
        logger.error("Erreur lors de la récupération des stats GitHub:", err);
        setError(err);
        setLoading(false);
      }
    };

    fetchGithubStats();
  }, [username]);

  return { stats, loading, error };
};
