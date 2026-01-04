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
      stats: "Stats & Projets",
      contact: "Contact",
    },
    home: {
      greeting: "Bonjour ! Je suis",
      subtitle: "Étudiant Epitech – Full-Stack & Data",
      description:
        "Étudiant passionné à Epitech Paris, je construis des projets web et data concrets autour de la tech, de la finance et de l'entrepreneuriat.",
      downloadCV: "Télécharger mon CV",
    },
    skills: {
      title: "Mes Compétences Techniques",
      subtitle: "Les technos que j'utilise au quotidien",
    },
    projects: {
      title: "Mes Projets",
      subtitle: "Une sélection de projets persos et scolaires",
      all: "Tous",
      finished: "Fini",
      inProgress: "En cours",
      viewCode: "Voir le code",
      status: "Statut",
    },
    timeline: {
      title: "Mon Parcours",
      subtitle: "Les étapes qui ont marqué mon parcours",
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
      form: {
        name: "Nom",
        namePlaceholder: "Votre nom",
        nameError: "Le nom doit contenir au moins 2 caractères",
        email: "Email",
        emailPlaceholder: "votre.email@exemple.com",
        emailError: "Veuillez entrer une adresse email valide",
        message: "Message",
        messagePlaceholder: "Votre message...",
        messageError: "Le message doit contenir au moins 10 caractères",
        send: "Envoyer",
        sending: "Envoi en cours...",
        successTitle: "Message envoyé !",
        successMessage:
          "Merci pour votre message. Je vous répondrai rapidement.",
        errorTitle: "Erreur",
        errorMessage: "Une erreur s'est produite. Veuillez réessayer.",
      },
    },
    presentation: {
      greeting: "Bonjour, je suis",
      name: "Adrien Le Guen",
      role: "Développeur Full-Stack & Data Analyst",
      description:
        "Étudiant passionné à Epitech Paris de {age} ans, je crée des applications web modernes et analyse des données pour résoudre des problèmes complexes.",
      yearsOld: "ans",
    },
    footer: {
      rights: "Tous droits réservés",
      madeWith: "Fait avec",
    },
    error: {
      title: "404",
      message: "Oups ! La page que vous cherchez n'existe pas.",
      backHome: "Retour à l'accueil",
    },
  },
  en: {
    nav: {
      home: "Home",
      presentation: "About",
      skills: "Skills",
      projects: "Projects",
      timeline: "Journey",
      stats: "Stats & Projects",
      contact: "Contact",
    },
    home: {
      greeting: "Hi! I'm",
      subtitle: "Epitech student – Full-Stack & Data",
      description:
        "Passionate student at Epitech Paris, I build concrete web and data projects around tech, finance and entrepreneurship.",
      downloadCV: "Download my CV",
    },
    skills: {
      title: "My Technical Skills",
      subtitle: "Technologies I use every day",
    },
    projects: {
      title: "My Projects",
      subtitle: "A selection of personal and school projects",
      all: "All",
      finished: "Finished",
      inProgress: "In Progress",
      viewCode: "View code",
      status: "Status",
    },
    timeline: {
      title: "My Journey",
      subtitle: "Key steps of my journey",
    },
    stats: {
      title: "Statistics & GitHub Projects",
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
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        nameError: "Name must contain at least 2 characters",
        email: "Email",
        emailPlaceholder: "your.email@example.com",
        emailError: "Please enter a valid email address",
        message: "Message",
        messagePlaceholder: "Your message...",
        messageError: "Message must contain at least 10 characters",
        send: "Send",
        sending: "Sending...",
        successTitle: "Message sent!",
        successMessage: "Thank you for your message. I will reply soon.",
        errorTitle: "Error",
        errorMessage: "An error occurred. Please try again.",
      },
    },
    presentation: {
      greeting: "Hi! I'm",
      name: "Adrien Le Guen",
      role: "Full-Stack Developer & Data Analyst",
      description:
        "Passionate {age}-year-old student at Epitech Paris, I create modern web applications and analyze data to solve complex problems.",
      yearsOld: "years old",
    },
    footer: {
      rights: "All rights reserved",
      madeWith: "Made with",
    },
    error: {
      title: "404",
      message: "Oops! The page you're looking for doesn't exist.",
      backHome: "Back to home",
    },
  },
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Vérifier d'abord si une langue est sauvegardée
    const saved = localStorage.getItem("language");
    if (saved) {
      return saved;
    }

    // Sinon, détecter la langue du navigateur
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.split("-")[0]; // Prendre seulement 'en' de 'en-US'

    // Retourner 'en' si le navigateur est en anglais, sinon 'fr' par défaut
    return langCode === "en" ? "en" : "fr";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fr" ? "en" : "fr"));
  };

  const setLanguageManually = (lang) => {
    setLanguage(lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, setLanguageManually, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
