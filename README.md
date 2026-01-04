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
  <a href="#-documentation">📚 Documentation</a>
</p>

---

## 🌟 Aperçu

Portfolio personnel présentant mes projets, compétences techniques, parcours et statistiques GitHub. Développé avec React et Tailwind CSS, il offre une expérience utilisateur fluide avec support du mode sombre et internationalisation FR/EN.

### 🎯 Points Forts

- ✅ Design responsive et moderne
- ✅ Mode sombre/clair avec persistance
- ✅ Bilingue FR/EN
- ✅ Statistiques GitHub en temps réel
- ✅ Formulaire de contact fonctionnel
- ✅ SEO optimisé (Open Graph, Schema.org)
- ✅ Performance optimale (lazy loading, code splitting)
- ✅ Accessible (ARIA, navigation clavier)

---

## 🛠️ Technologies

### Frontend

- **[React 18.3.1](https://reactjs.org/)** - Bibliothèque UI moderne
- **[Vite 5.1.0](https://vitejs.dev/)** - Build tool ultra-rapide
- **[Tailwind CSS 3.4.1](https://tailwindcss.com/)** - Framework CSS utility-first
- **[React Router 6.22](https://reactrouter.com/)** - Routing client-side
- **[Framer Motion](https://www.framer.com/motion/)** - Animations React

### Services & APIs

- **[EmailJS](https://www.emailjs.com/)** - Envoi d'emails
- **[GitHub API](https://docs.github.com/en/rest)** - Statistiques et projets
- **[Vercel Analytics](https://vercel.com/analytics)** - Suivi des performances

---

## ✨ Fonctionnalités

### 🎨 Interface

- **Design responsive** - Mobile-first, s'adapte à tous les écrans
- **Mode sombre/clair** - Toggle avec persistance localStorage
- **Animations fluides** - Transitions et effets Framer Motion
- **Navigation intuitive** - Smooth scroll entre sections

### 🌍 Contenu

- **Présentation** - Biographie et introduction
- **Compétences techniques** - Technologies avec liens documentation
- **Timeline** - Parcours académique et professionnel
- **Projets** - Portfolio avec filtres par statut
- **Statistiques GitHub** - Métriques en temps réel (repos, stars, langages)
- **Formulaire de contact** - EmailJS avec validation complète

### ⚡ Performance & SEO

- **Lazy loading** - Chargement différé des routes
- **Code splitting** - Optimisation du bundle
- **Meta tags complets** - Open Graph, Twitter Cards
- **Schema.org** - Données structurées JSON-LD
- **Sitemap & robots.txt** - Indexation optimisée

---

## � Installation

### Prérequis

- **Node.js** >= 16.x
- **npm** >= 7.x

### Étapes

### 1. Cloner le dépôt

```bash
git clone https://github.com/lgadrien/Portfolio.git
cd Portfolio/Portfolio-app
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configurer les variables d'environnement

Copier le fichier d'exemple et remplir les valeurs :

```bash
cp .env.example .env
```

**Variables requises :**

```env
VITE_EMAILJS_SERVICE_ID=votre_service_id
VITE_EMAILJS_TEMPLATE_ID=votre_template_id
VITE_EMAILJS_PUBLIC_KEY=votre_public_key
VITE_GITHUB_TOKEN=ghp_votre_token  # Optionnel
```

> 📖 Voir [docs/SECURITY.md](./Portfolio-app/docs/SECURITY.md) pour obtenir ces credentials

### 4. Lancer le serveur de développement

```bash
npm run dev
```

Le site sera accessible à `http://localhost:3000`

---

## 🎮 Scripts Disponibles

```bash
npm run dev       # Lancer le serveur de développement
npm run build     # Build de production optimisé
npm run preview   # Prévisualiser le build
npm run lint      # Vérifier le code avec ESLint
```

---

## 📚 Documentation

- [🔒 Guide de Sécurité](./Portfolio-app/docs/SECURITY.md) - Configuration variables d'environnement
- [⚡ Optimisations](./Portfolio-app/docs/OPTIMIZATIONS.md) - Performance et SEO
- [📊 Fonctionnalités SEO](./Portfolio-app/docs/SEO_FEATURES.md) - Métadonnées et indexation

---

## 📁 Structure du Projet

```
Portfolio-app/
├── src/
│   ├── Components/
│   │   ├── ErrorBoundary.jsx      # 🆕 Gestion erreurs React
│   │   ├── Home.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Stats.jsx              # Statistiques GitHub
│   │   ├── Error/                 # Page 404
│   │   └── HomeComponents/
│   │       ├── Présentation.jsx
│   │       ├── TechSkills.jsx
│   │       ├── Projets.jsx
│   │       ├── Timeline.jsx
│   │       └── Contact.jsx        # Formulaire EmailJS
│   ├── context/
│   │   ├── ThemeContext.jsx       # Dark mode
│   │   ├── LanguageContext.jsx    # i18n FR/EN
│   │   └── NavigationContext.jsx
│   ├── utils/
│   │   ├── checkEnv.js            # Validation variables d'env
│   │   └── logger.js              # Logger personnalisé
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   ├── img/
│   ├── sitemap.xml
│   └── robots.txt
├── api/                           # Vercel Serverless
│   └── github-stats.js            # Proxy API GitHub
├── docs/
│   ├── SECURITY.md
│   ├── OPTIMIZATIONS.md
│   └── SEO_FEATURES.md
├── .env.example
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🚀 Déploiement

### Vercel (Recommandé)

1. **Connecter à Vercel**

   ```bash
   npm i -g vercel
   vercel
   ```

2. **Configurer les variables d'environnement**

   - Aller dans Settings → Environment Variables
   - Ajouter les variables depuis `.env`

3. **Déployer**
   ```bash
   vercel --prod
   ```

### Autres Plateformes

- **Netlify** - `npm run build` puis drag & drop `/dist`
- **GitHub Pages** - Avec GitHub Actions
- **Cloudflare Pages** - Connecter le repository

---

## ⚡ Optimisations Implémentées

### Performance

- ✅ Code Splitting (vendors séparés)
- ✅ Lazy Loading des routes
- ✅ Minification Terser
- ✅ Tree Shaking
- ✅ Preconnect DNS
- ✅ Error Boundary global

### SEO

- ✅ Meta tags complets
- ✅ Open Graph & Twitter Cards
- ✅ Schema.org JSON-LD
- ✅ Sitemap.xml & robots.txt
- ✅ Canonical URLs

### Accessibilité

- ✅ ARIA labels & roles
- ✅ Navigation clavier
- ✅ Focus visible
- ✅ Validation formulaires accessibles

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. **Fork** le projet
2. Créer une **branche** (`git checkout -b feature/AmazingFeature`)
3. **Commit** les changements (`git commit -m 'Add AmazingFeature'`)
4. **Push** vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une **Pull Request**

---

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 📧 Contact

**Adrien Le Guen** - Étudiant Développeur Full-Stack & Data Analyst

- 🌐 Portfolio : [portfolio-lgadriens-projects.vercel.app](https://portfolio-lgadriens-projects.vercel.app)
- 💼 LinkedIn : [linkedin.com/in/adrien-le-guen](https://www.linkedin.com/in/adrien-le-guen)
- 🐙 GitHub : [@lgadrien](https://github.com/lgadrien)
- 📧 Email : Formulaire de contact sur le portfolio

---

<div align="center">

**⭐ Si ce projet vous plaît, n'hésitez pas à lui donner une étoile ! ⭐**

_Développé avec ❤️ par [Adrien Le Guen](https://github.com/lgadrien)_

**Dernière mise à jour :** 4 janvier 2026

</div>
