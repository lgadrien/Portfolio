# 🚀 Portfolio - Adrien Le Guen

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/Vite-5.1.0-646CFF?logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?logo=tailwind-css&logoColor=white" alt="Tailwind">
  <img src="https://img.shields.io/github/last-commit/lgadrien/Portfolio?color=yellow&style=flat-square" alt="Last Commit">
  <img src="https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white" alt="Vercel">
</p>

<h3 align="center">Portfolio moderne et responsive - Full-Stack & Data Analyst</h3>

<p align="center">
  <a href="https://portfolio-lgadriens-projects.vercel.app">🌐 Voir la démo en ligne</a> •
  <a href="#-installation">📦 Installation</a> •
  <a href="#-fonctionnalités">✨ Fonctionnalités</a> •
  <a href="#-architecture">🏗️ Architecture</a>
</p>

---

## 🌟 Aperçu

Portfolio personnel présentant mes projets, compétences techniques, parcours et statistiques GitHub avancées. Développé avec une **Clean Architecture** sous React et Tailwind CSS, il offre une expérience utilisateur premium avec **Glassmorphism**, animations fluides et visualisation de données interactive.

### 🎯 Points Forts

- ✅ **Architecture Pro** : Séparation stricte (UI / Business Logic / Data).
- ✅ **Design Premium** : UI Glassmorphism, Animations Framer Motion, Dark Mode natif.
- ✅ **Dashboard GitHub** : Statistiques en temps réel avec graphiques interactifs (Recharts).
- ✅ **Bilingue** : Support complet FR/EN (i18n).
- ✅ **Performance** : Lazy loading, Code splitting, et optimisations SEO.
- ✅ **Accessibilité** : Respect des normes ARIA et navigation clavier.

---

## 🛠️ Technologies

### Frontend Core

- **[React 18.3.1](https://reactjs.org/)** - Bibliothèque UI moderne
- **[Vite 5.1.0](https://vitejs.dev/)** - Build tool next-gen
- **[Tailwind CSS 3.4.1](https://tailwindcss.com/)** - Styling utility-first
- **[Recharts](https://recharts.org/)** - Visualisation de données (Graphiques)
- **[Framer Motion](https://www.framer.com/motion/)** - Moteur d'animations

### Architecture & State

- **Custom Hooks** - Abstraction de la logique (ex: `useGithubStats`)
- **Context API** - Gestion d'état global (Theme, Language)
- **React Router 6** - Navigation client-side
- **Services Pattern** - Couche API découplée (ex: `githubService.js`)

### Services & APIs

- **[EmailJS](https://www.emailjs.com/)** - Envoi d'emails sans backend
- **[GitHub API](https://docs.github.com/en/rest)** - Données de profil et repositories
- **[Vercel Serverless](https://vercel.com/docs/functions)** - Fonctions backend pour l'API proxy
- **[Vercel Analytics](https://vercel.com/analytics)** - Suivi de trafic respectueux de la vie privée

---

## ✨ Fonctionnalités

### 🎨 UI/UX & Design

- **Glassmorphism** - Effets de flou et transparence modernes.
- **Micro-interactions** - Feedbacks visuels au survol et au clic.
- **Transitions de Page** - Animations douces entre les routes.
- **Smooth Scroll** - Navigation fluide avec ancre précise.

### 📊 Dashboard GitHub

- **Vue d'ensemble** - KPIs (Stars, Forks, Followers).
- **Contribution Graph** - Graphique d'activité interactif avec filtres temporels (7J, 1M, ..., Max).
- **Analyse de Code** - Répartition des langages par popularité.
- **Top Projets** - Showcase automatique des meilleurs repos.

### ⚡ Performance & SEO

- **Lazy loading** - Chargement différé des routes lourdes (Stats).
- **Code splitting** - Séparation automatique des bundles.
- **SEO Technique** - Meta tags dynamiques, Open Graph, JSON-LD.
- **Lighthouse Score** - Optimisé pour atteindre 90-100 partout.

---

## 🏗️ Architecture du Projet

Le projet suit les principes de la **Clean Architecture** adaptée au frontend :

```
Portfolio-app/
├── src/
│   ├── components/        # 🧱 Composants UI Réutilisables (Stateless focus)
│   │   ├── Stats/         # Sous-composants spécifiques au dashboard
│   │   ├── HomeComponents/# Sections de la page d'accueil
│   │   └── ...
│   ├── pages/             # 📄 Vues principales routées (Home, Stats)
│   ├── services/          # 🧠 Logique Métier & API (Agnostique de React)
│   │   └── githubService.js # Gestion des appels GitHub
│   ├── hooks/             # 🎣 Custom Hooks (Lien entre UI et Services)
│   │   ├── useGithubStats.js
│   │   └── useScrollToSection.js
│   ├── context/           # 🌐 État Global (Theme, Langue)
│   └── utils/             # 🛠️ Utilitaires (Logger, Formatters)
├── api/                   # ☁️ Vercel Serverless Functions
├── public/                # 📦 Assets statiques
└── ...
```

---

## 📦 Installation

### 1. Cloner le dépôt

```bash
git clone https://github.com/lgadrien/Portfolio.git
cd Portfolio/Portfolio-app
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configurer l'environnement

Créer un fichier `.env` à la racine :

```env
VITE_EMAILJS_SERVICE_ID=votre_service_id
VITE_EMAILJS_TEMPLATE_ID=votre_template_id
VITE_EMAILJS_PUBLIC_KEY=votre_public_key
# Optionnel pour le dev local
VITE_GITHUB_TOKEN=votre_token_github
```

### 4. Lancer le serveur

```bash
npm run dev
```

---

## 🤝 Contribution

Les contributions sont les bienvenues !
Si vous souhaitez améliorer le design ou ajouter des features :

1. **Fork** le projet
2. Créer une **branche** (`git checkout -b feature/NewDesign`)
3. **Commit** les changements
4. **Push** et ouvrir une **Pull Request**

---

## 📧 Contact

**Adrien Le Guen** - Développeur Full-Stack & Data Analyst

- 🌐 Portfolio : [portfolio-lgadriens-projects.vercel.app](https://portfolio-lgadriens-projects.vercel.app)
- 💼 LinkedIn : [linkedin.com/in/adrien-le-guen](https://www.linkedin.com/in/adrien-le-guen)
- 🐙 GitHub : [@lgadrien](https://github.com/lgadrien)

---

<div align="center">

**⭐ Si ce projet vous plaît, laissez une étoile ! ⭐**

_Dernière mise à jour : 9 Janvier 2026_

</div>
