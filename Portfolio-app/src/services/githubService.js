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

    // --- Fetch Events (Activité Récente) ---
    // On fetch les événements en parallèle si possible, sinon on le rajoute à la suite
    let eventsData = [];
    try {
      let eventsResponse;
      if (import.meta.env.DEV) {
        eventsResponse = await fetch(
          `https://api.github.com/users/${username}/events?per_page=100`
        );
      } else {
        // En prod, on suppose que l'API serverless gère aussi les events ou on appelle l'API publique (rate limit public est souvent suffisant pour les events)
        // Pour simplifier ici et ne pas toucher au serverless qu'on ne voit pas, on tente l'appel direct pour les events qui sont publics.
        eventsResponse = await fetch(
          `https://api.github.com/users/${username}/events?per_page=100`
        );
      }

      if (eventsResponse.ok) {
        eventsData = await eventsResponse.json();
      }
    } catch (e) {
      logger.warn("Impossible de récupérer les events GitHub", e);
    }

    // --- Traitement des Événements ---
    const recentActivity = eventsData
      .filter(
        (event) =>
          event.type === "PushEvent" ||
          event.type === "CreateEvent" ||
          event.type === "WatchEvent"
      )
      .slice(0, 10)
      .map((event) => {
        let type = "unknown";
        let description = "";
        let date = event.created_at;
        let repoName = event.repo.name.replace(`${username}/`, ""); // Nom court
        let repoUrl = `https://github.com/${event.repo.name}`;

        if (event.type === "PushEvent") {
          type = "push";
          const commitCount = event.payload.commits.length;
          description = `Pushed ${commitCount} commit${
            commitCount > 1 ? "s" : ""
          }`;
        } else if (event.type === "CreateEvent") {
          type = "create";
          description = `Created ${event.payload.ref_type} ${
            event.payload.ref || ""
          }`;
        } else if (event.type === "WatchEvent") {
          type = "star";
          description = "Starred this repository";
        }

        return { id: event.id, type, description, date, repoName, repoUrl };
      });

    // Calcul approximatif des commits sur les derniers events récupérés (juste pour l'indicateur "Activité Récente")
    const recentCommitsCount = eventsData
      .filter((e) => e.type === "PushEvent")
      .reduce((acc, e) => acc + e.payload.commits.length, 0);

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
      recentActivity, // Nouvelle donnée
      recentCommitsCount, // Nouvelle donnée
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
