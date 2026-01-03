<h1 align="center">🌐 Mon Portfolio</h1>
<h3 align="center">Un portfolio interactif pour présenter mes projets, compétences et mon parcours.</h3>

<p align="center">
  <img src="https://img.shields.io/github/languages/top/lgadrien/Portfolio?color=blue&style=flat-square" alt="Top Language">
  <img src="https://img.shields.io/github/repo-size/lgadrien/Portfolio?color=brightgreen&style=flat-square" alt="Repo Size">
  <img src="https://img.shields.io/github/last-commit/lgadrien/Portfolio?color=yellow&style=flat-square" alt="Last Commit">
</p>

---

## 🌟 Aperçu

Ce dépôt contient le code source de mon portfolio personnel. Il met en avant :

- Mes projets.
- Les technologies que j'utilise.
- Mes expériences professionnelles et académiques.

👉 **Lien vers le portfolio en ligne : [Mon Portfolio](https://portfolio-lgadriens-projects.vercel.app)**

---

## 🛠️ Technologies Utilisées

### **Frontend**

- **React.js** - Bibliothèque pour construire l'interface utilisateur.
- **Tailwind CSS** - Framework CSS pour un design moderne et responsive.
- **JavaScript** - Langage principal pour les interactions frontend.

### **Outils**

- **Vite.js** - Outil de bundling rapide pour le développement.

---

## 🎨 Fonctionnalités

- **Présentation** : Une section qui introduit mon profil et mon parcours.
- **Projets** : Une liste interactive de mes projets avec descriptions, technologies et liens GitHub.
- **Technologies** : Un aperçu des outils et technologies que j'utilise.
- **Contact** : Un formulaire pour permettre aux visiteurs de me contacter directement.
- **Stats** : Statistiques GitHub en temps réel avec les projets les plus populaires.
- **Multilingue** : Support FR/EN avec sauvegarde des préférences.

---

## 🚀 Installation et Lancement

Pour exécuter ce projet en local, suivez ces étapes :

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
```bash
cp .env.example .env
# Remplir les variables dans .env
```

### 4. Lancer le serveur de développement
```bash
npm run dev
```

Le site sera accessible à `http://localhost:5173`

---

## 📚 Documentation

- [🔒 Guide de Sécurité](./SECURITY.md) - Configuration des variables d'environnement
- [📊 Fonctionnalités SEO](./SEO_FEATURES.md) - Optimisations SEO et métadonnées

---

## 📁 Structure du Projet

```
Portfolio-app/
├── src/
│   ├── Components/
│   │   ├── Home.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Stats.jsx
│   │   ├── Error/
│   │   └── HomeComponents/
│   │       ├── Présentation.jsx
│   │       ├── TechSkills.jsx
│   │       ├── Projets.jsx
│   │       ├── Timeline.jsx
│   │       └── Contact.jsx
│   ├── context/
│   │   ├── ThemeContext.jsx
│   │   ├── LanguageContext.jsx
│   │   └── NavigationContext.jsx
│   ├── utils/
│   │   └── checkEnv.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   ├── img/
│   ├── sitemap.xml
│   └── robots.txt
├── docs/
│   ├── README.md
│   ├── SECURITY.md
│   └── SEO_FEATURES.md
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

---

## 🎯 Déploiement

Ce projet est déployé sur **Vercel**. Pour déployer vos propres changements :

1. Pusher votre code sur GitHub
2. Vercel redéploiera automatiquement

Pour configurer les variables d'environnement en production :
- Aller sur [Vercel Dashboard](https://vercel.com)
- Sélectionner le projet
- Aller dans Settings > Environment Variables
- Ajouter les variables depuis votre `.env` local

---

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Signaler des bugs
- Proposer des améliorations
- Créer des pull requests

---

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

---

## 👤 À propos

Je suis un développeur full-stack et data analyst passionné, actuellement étudiant à **Epitech Paris**.

- 🔗 [LinkedIn](https://www.linkedin.com/in/adrien-le-guen)
- 🐙 [GitHub](https://github.com/lgadrien)
- 📧 Contact via le formulaire du portfolio

---

**Dernière mise à jour :** 3 janvier 2026
