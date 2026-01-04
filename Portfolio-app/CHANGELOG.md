# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added - 2026-01-04

- 🛡️ **Error Boundary** - Composant global pour capturer les erreurs React avec UI de secours élégante
- 📚 **README.md complet** - Documentation complète avec badges, instructions d'installation, et architecture
- 📄 **CHANGELOG.md** - Historique des changements du projet

### Fixed - 2026-01-04

- 🐛 **Contact.jsx** - Ajout de l'import manquant de `logger` (ligne 8)
- 🌍 **Contact.jsx** - Correction du message d'erreur hardcodé pour utiliser `t.contact.form.errorMessage`
- ⚡ **Error Handling** - Meilleure gestion des erreurs avec affichage détaillé en développement

### Changed - 2026-01-04

- ⬆️ **React** - Mise à jour de 18.2.0 vers 18.3.1 (amélioration performances et corrections de bugs)
- ⬆️ **React-DOM** - Mise à jour de 18.2.0 vers 18.3.1
- 🏗️ **Architecture** - Intégration de l'Error Boundary dans le point d'entrée (main.jsx)

### Security - 2026-01-04

- ✅ Toutes les variables d'environnement sont maintenant validées au démarrage
- ✅ Les erreurs en production ne révèlent pas de détails sensibles

---

## [1.0.0] - 2026-01-03

### Initial Release

#### Features

- ✨ Portfolio moderne et responsive
- 🌓 Mode sombre/clair avec persistance
- 🌍 Support bilingue FR/EN
- 📊 Statistiques GitHub en temps réel
- 📧 Formulaire de contact avec EmailJS
- 🎯 SEO optimisé (Open Graph, Schema.org, Sitemap)
- ⚡ Performance optimale (lazy loading, code splitting, minification)
- ♿ Accessibilité WCAG AA

#### Components

- Navigation responsive avec menu mobile
- Section présentation avec bio dynamique
- Compétences techniques avec filtres
- Timeline du parcours
- Galerie de projets avec filtres
- Page statistiques GitHub détaillée
- Footer avec liens sociaux

#### Technical Stack

- React 18.2.0
- Vite 5.1.0
- Tailwind CSS 3.4.1
- React Router 6.22.0
- Framer Motion 12.23.26
- EmailJS pour le formulaire de contact
- Vercel Analytics

---

## Legend

- `Added` - Nouvelles fonctionnalités
- `Changed` - Modifications de fonctionnalités existantes
- `Deprecated` - Fonctionnalités bientôt supprimées
- `Removed` - Fonctionnalités supprimées
- `Fixed` - Corrections de bugs
- `Security` - Corrections de sécurité

---

**Note:** Les versions sont maintenues selon [Semantic Versioning](https://semver.org/):

- MAJOR : Changements incompatibles de l'API
- MINOR : Ajout de fonctionnalités rétro-compatibles
- PATCH : Corrections de bugs rétro-compatibles
