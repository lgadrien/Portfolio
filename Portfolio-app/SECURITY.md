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

| Variable                   | Description            | Où la trouver                          |
| -------------------------- | ---------------------- | -------------------------------------- |
| `VITE_EMAILJS_SERVICE_ID`  | ID du service EmailJS  | Dashboard EmailJS > Email Services     |
| `VITE_EMAILJS_TEMPLATE_ID` | ID du template email   | Dashboard EmailJS > Email Templates    |
| `VITE_EMAILJS_PUBLIC_KEY`  | Clé publique (User ID) | Dashboard EmailJS > Account > API Keys |

### ⚠️ Important

- **Ne JAMAIS committer le fichier `.env`** - Il est déjà dans `.gitignore`
- Les variables doivent commencer par `VITE_` pour être accessibles côté client
- En production, configurez ces variables dans votre plateforme d'hébergement :
  - Vercel : Settings > Environment Variables
  - Netlify : Site settings > Environment variables
  - GitHub Pages : Secrets

### Vérification

Pour vérifier que les variables sont bien chargées :

```javascript
console.log("EmailJS configuré:", {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ? "✓" : "✗",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ? "✓" : "✗",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ? "✓" : "✗",
});
```

### Déploiement

Sur Vercel/Netlify, ajoutez les variables d'environnement :

```bash
# Vercel CLI
vercel env add VITE_EMAILJS_SERVICE_ID
vercel env add VITE_EMAILJS_TEMPLATE_ID
vercel env add VITE_EMAILJS_PUBLIC_KEY

# Ou via l'interface web de votre hébergeur
```

## Bonnes pratiques

✅ **À FAIRE:**

- Utiliser `.env.example` comme template
- Documenter toutes les variables nécessaires
- Configurer les variables en production
- Renouveler régulièrement les clés API

❌ **À ÉVITER:**

- Committer des fichiers `.env`
- Partager vos clés API publiquement
- Hardcoder des secrets dans le code
- Utiliser les mêmes clés en dev et prod

## En cas de fuite

Si vos clés sont exposées accidentellement :

1. **Révoquer immédiatement** les clés sur EmailJS
2. Générer de nouvelles clés
3. Mettre à jour `.env` et votre hébergement
4. Vérifier l'historique Git : `git log --all --full-history --source -- '*env*'`
5. Si nécessaire, utiliser `git filter-branch` pour nettoyer l'historique

## Support

Pour toute question de sécurité, contactez : adrien.leguen.p@gmail.com
