# 🔒 Guide de Sécurité - Portfolio

## Variables d'environnement

Ce projet utilise des variables d'environnement pour sécuriser les informations sensibles (clés API, etc.).

### Configuration initiale

1. **Copier le fichier d'exemple**

   ```bash
   cp .env.example .env
   ```

2. **Remplir les valeurs dans `.env`**
   - Créez un compte sur [EmailJS](https://www.emailjs.com/)
   - Obtenez vos credentials depuis le Dashboard
   - Remplissez les valeurs dans `.env`

### Variables requises

| Variable                   | Description              | Où la trouver                          |
| -------------------------- | ------------------------ | -------------------------------------- |
| `VITE_EMAILJS_SERVICE_ID`  | ID du service EmailJS    | Dashboard EmailJS > Email Services     |
| `VITE_EMAILJS_TEMPLATE_ID` | ID du template email     | Dashboard EmailJS > Email Templates    |
| `VITE_EMAILJS_PUBLIC_KEY`  | Clé publique (User ID)   | Dashboard EmailJS > Account > API Keys |
| `VITE_GITHUB_TOKEN`        | Token GitHub (optionnel) | GitHub Settings > Developer settings   |

### ⚠️ Important

- **Ne JAMAIS committer le fichier `.env`** - Il est déjà dans `.gitignore`
- Les variables doivent commencer par `VITE_` pour être accessibles côté client
- En production, configurez ces variables dans votre plateforme d'hébergement :
  - **Vercel** : Settings > Environment Variables
  - **Netlify** : Site settings > Environment variables
  - **GitHub Pages** : Secrets

### Vérification

Pour vérifier que les variables sont bien chargées :

```javascript
console.log("Configuration vérifiée:", {
  emailjs: import.meta.env.VITE_EMAILJS_SERVICE_ID ? "✓" : "✗",
  github: import.meta.env.VITE_GITHUB_TOKEN ? "✓" : "✗",
});
```

### GitHub Token (recommandé)

Pour éviter les limitations de l'API GitHub publique (60 requêtes/heure) :

1. Accédez à [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Cliquez sur **Generate new token (classic)**
3. Sélectionnez le scope `public_repo`
4. Générez et copiez le token
5. Ajoutez-le à votre `.env` :
   ```
   VITE_GITHUB_TOKEN=ghp_xxxxxxxxxxxxx
   ```

### Déploiement sur Vercel

1. Connectez votre repo GitHub à Vercel
2. Dans **Settings > Environment Variables**, ajoutez :
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_GITHUB_TOKEN` (optionnel mais recommandé)
3. Redéployez votre projet

### Bonnes pratiques

- ✅ Utilisez des tokens avec des scopes limités
- ✅ Régénérez les tokens régulièrement
- ✅ Ne partagez jamais vos tokens en public
- ✅ Utilisez `.gitignore` pour protéger `.env`
- ✅ Vérifiez les logs de déploiement pour les erreurs de configuration

---

**Dernière mise à jour :** 3 janvier 2026
