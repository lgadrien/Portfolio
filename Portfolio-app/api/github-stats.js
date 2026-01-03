// Vercel Serverless Function to fetch GitHub stats securely
// Expects a `username` query parameter and uses an optional GITHUB_TOKEN
// environment variable on the server side to increase rate limits.

module.exports = async (req, res) => {
  const {
    query: { username },
  } = req;

  if (!username) {
    res.status(400).json({ error: "Missing 'username' query parameter" });
    return;
  }

  const headers = {
    "User-Agent": "portfolio-lgadrien",
    Accept: "application/vnd.github+json",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const [userResponse, reposResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { headers }),
      fetch(
        `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
        { headers }
      ),
    ]);

    if (!userResponse.ok) {
      const text = await userResponse.text();
      res.status(userResponse.status).json({
        error: "Failed to fetch GitHub user",
        details: text,
      });
      return;
    }

    if (!reposResponse.ok) {
      const text = await reposResponse.text();
      res.status(reposResponse.status).json({
        error: "Failed to fetch GitHub repositories",
        details: text,
      });
      return;
    }

    const user = await userResponse.json();
    const repos = await reposResponse.json();

    // Optionally add some basic caching on the response
    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");

    res.status(200).json({ user, repos });
  } catch (error) {
    console.error("Error in /api/github-stats:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
