# 🚀 Portfolio - Adrien Le Guen

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/Vite-5.1.0-646CFF?logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?logo=tailwind-css&logoColor=white" alt="Tailwind">
  <img src="https://img.shields.io/github/last-commit/lgadrien/Portfolio?color=yellow&style=flat-square" alt="Last Commit">
  <img src="https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white" alt="Vercel">
</p>

<h3 align="center">Portfolio - Full-Stack & Data Analyst</h3>

<p align="center">
  <a href="https://portfolio-lgadriens-projects.vercel.app">🌐 Voir le site en live</a> •
  <a href="#-comment-lancer-le-projet">📦 Tester en local</a> •
  <a href="#-mon-approche">🧠 Mon Approche</a>
</p>

---

## 👋 Salut, moi c'est Adrien !

Bienvenue sur le repository de mon **Portfolio**. Plus qu'une simple vitrine, j'ai conçu ce projet comme un véritable terrain de jeu pour démontrer mes compétences en **Clean Architecture**, en **UI Design** et en **Intégration d'API**.

Actuellement étudiant à **Epitech** et passionné par la Data et l'IA, j'ai voulu créer une application qui reflète mon exigence technique : code propre, performant et maintenable.

---

## 💡 Mon Approche

Je ne voulais pas d'un simple site statique. J'ai construit ce portfolio comme une vraie **Single Page Application (SPA)** professionnelle.

### Objectifs du projet :

1.  **Expérience Utilisateur Premium** : Utilisation du _Glassmorphism_, d'animations fluides (Framer Motion) et d'un Dark Mode natif soigné.
2.  **Architecture Scalable** : Séparation stricte entre la vue (UI), la logique (Hooks) et les données (Services).
3.  **Data Driven** : Une page "Stats" connectée en temps réel à l'API GitHub pour visualiser concrètement mon activité (commits, langages, contributions).

---

## 🛠️ Ma Stack Technique

Voici les outils que j'ai choisis pour construire ce projet :

### Frontend Core

- **React 18** : Pour sa robustesse et son écosystème.
- **Vite** : Pour un environnement de développement ultra-rapide.
- **Tailwind CSS** : Pour un styling rapide, maintenable et un Dark Mode facile à gérer.

### Data & Visualisation

- **Recharts** : Pour les graphiques interactifs (ma page Stats).
- **GitHub API + Vercel Serverless** : Pour récupérer et sécuriser mes données en temps réel.

### Architecture

- **Services Pattern** : Toute la logique API est isolée dans `services/githubService.js`.
- **Custom Hooks** : Pour gérer la logique complexe (ex: `useGithubStats`).
- **Context API** : Pour gérer le thème et la langue (FR/EN) globalement.

---

## 🚀 Fonctionnalités Clés

- ✨ **Interface Responsive & Fluide** : Animations d'entrée, smooth scroll et micto-interactions.
- 📊 **Tableau de Bord GitHub** :
  - **Contribution Graph** interactif (comme sur GitHub).
  - **Analyse des Langages** que j'utilise le plus.
  - **KPIs en temps réel** (Stars, Forks, Projets).
- 🌍 **Internationalisation** : Site entièrement bilingue Français 🇫🇷 / Anglais 🇬🇧.
- 📧 **Contact Direct** : Formulaire fonctionnel connecté via EmailJS.

---

## � Comment lancer le projet ?

Si vous êtes curieux de voir le code tourner sur votre machine :

1.  **Clonez le repo** :

    ```bash
    git clone https://github.com/lgadrien/Portfolio.git
    cd Portfolio/Portfolio-app
    ```

2.  **Installez les dépendances** :

    ```bash
    npm install
    ```

3.  **Lancez le serveur de dev** :
    ```bash
    npm run dev
    ```
    Rendez-vous sur `http://localhost:5173` !

---

## 🤝 Restons en contact

Je suis toujours ouvert aux discussions sur la Tech, la Data ou pour une opportunité d'alternance.

- 🌐 **Mon site** : [portfolio-lgadriens-projects.vercel.app](https://portfolio-lgadriens-projects.vercel.app)
- 💼 **LinkedIn** : [Adrien Le Guen](https://www.linkedin.com/in/adrien-le-guen)
- 🐙 **GitHub** : [@lgadrien](https://github.com/lgadrien)

---

<div align="center">
  <i>Si ce projet vous inspire ou que vous trouvez le code propre, n'hésitez pas à laisser une petite ⭐ !</i>
</div>
