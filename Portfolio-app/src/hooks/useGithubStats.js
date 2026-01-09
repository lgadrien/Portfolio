import { useState, useEffect } from "react";
import logger from "../utils/logger";
import { getGithubProfile } from "../services/githubService";

export const useGithubStats = (username) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGithubStats = async () => {
      try {
        setLoading(true);
        // Utilisation du service dédié, le hook ne s'occupe plus de la logique "comment fetcher"
        const data = await getGithubProfile(username);
        setStats(data);
        setError(null);
      } catch (err) {
        logger.error(
          "Erreur lors de la récupération des stats via le Hook:",
          err
        );
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchGithubStats();
    }
  }, [username]);

  return { stats, loading, error };
};
