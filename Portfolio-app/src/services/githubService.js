import logger from "../utils/logger";

/**
 * Récupère et structure les données du profil GitHub.
 * @param {string} username - Le nom d'utilisateur GitHub.
 * @returns {Promise<Object>} - L'objet stats formaté.
 */
export const getGithubProfile = async (username) => {
  let userData;
  let reposData;

  try {
    if (import.meta.env.DEV) {
      // En développement local : appel direct à l'API GitHub (pas de token)
      // Note: Attention aux rate limits de GitHub (60/heure sans token)
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
      // Cela permet de cacher le token GitHub côté serveur
      const response = await fetch(`/api/github-stats?username=${username}`);
      if (!response.ok) {
        throw new Error(
          `Failed to fetch GitHub stats from serverless API: ${response.status}`
        );
      }

      const data = await response.json();
      userData = data.user;
      reposData = data.repos;
    }

    // --- Calcul des Statistiques Dérivées ---

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
        languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
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

    // Calculer l'ancienneté du compte en années
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

    // Formatage final de l'objet de retour
    return {
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
    };
  } catch (err) {
    logger.error("Erreur dans le service GitHub:", err);
    throw err; // Propager l'erreur pour qu'elle soit gérée par le composant/hook
  }
};
