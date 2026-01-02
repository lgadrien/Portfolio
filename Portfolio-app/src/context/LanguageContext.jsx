import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

const translations = {
  fr: {
    nav: {
      home: "Accueil",
      presentation: "Présentation",
      skills: "Compétences",
      projects: "Projets",
      timeline: "Parcours",
      stats: "Stats",
      contact: "Contact",
    },
    home: {
      greeting: "Salut ! Je suis",
      subtitle: "Développeur Full-Stack & Data Analyst",
      description:
        "Étudiant passionné à Epitech Paris, je crée des applications web modernes et analyse des données pour résoudre des problèmes complexes.",
      downloadCV: "Télécharger mon CV",
    },
    skills: {
      title: "Mes Compétences Techniques",
      subtitle: "Technologies que je maîtrise",
    },
    projects: {
      title: "Mes Projets",
      subtitle: "Découvrez mes réalisations",
      all: "Tous",
      finished: "Fini",
      inProgress: "En cours",
      viewCode: "Voir le code",
      status: "Statut",
    },
    timeline: {
      title: "Mon Parcours",
      subtitle: "De mes débuts à aujourd'hui",
    },
    stats: {
      title: "Statistiques & Métriques",
      subtitle: "Mes statistiques GitHub et l'évolution de mes projets",
      publicRepos: "Dépôts publics",
      totalStars: "Stars totales",
      followers: "Followers",
      totalForks: "Forks totaux",
      topProjects: "Projets les plus populaires",
      viewGithub: "Voir mon profil GitHub complet",
      noDescription: "Pas de description",
      loading: "Chargement...",
      error: "Impossible de charger les statistiques GitHub",
    },
    contact: {
      title: "Me Contacter",
      subtitle: "N'hésitez pas à me contacter",
      email: "M'envoyer un email",
    },
    footer: {
      rights: "Tous droits réservés",
      madeWith: "Fait avec",
    },
  },
  en: {
    nav: {
      home: "Home",
      presentation: "About",
      skills: "Skills",
      projects: "Projects",
      timeline: "Journey",
      stats: "Stats",
      contact: "Contact",
    },
    home: {
      greeting: "Hi! I'm",
      subtitle: "Full-Stack Developer & Data Analyst",
      description:
        "Passionate student at Epitech Paris, I create modern web applications and analyze data to solve complex problems.",
      downloadCV: "Download my CV",
    },
    skills: {
      title: "My Technical Skills",
      subtitle: "Technologies I master",
    },
    projects: {
      title: "My Projects",
      subtitle: "Discover my work",
      all: "All",
      finished: "Finished",
      inProgress: "In Progress",
      viewCode: "View code",
      status: "Status",
    },
    timeline: {
      title: "My Journey",
      subtitle: "From my beginnings to today",
    },
    stats: {
      title: "Statistics & Metrics",
      subtitle: "My GitHub statistics and project evolution",
      publicRepos: "Public repos",
      totalStars: "Total stars",
      followers: "Followers",
      totalForks: "Total forks",
      topProjects: "Most popular projects",
      viewGithub: "View my full GitHub profile",
      noDescription: "No description",
      loading: "Loading...",
      error: "Unable to load GitHub statistics",
    },
    contact: {
      title: "Contact Me",
      subtitle: "Feel free to reach out",
      email: "Send me an email",
    },
    footer: {
      rights: "All rights reserved",
      madeWith: "Made with",
    },
  },
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("language");
    return saved || "fr";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fr" ? "en" : "fr"));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
