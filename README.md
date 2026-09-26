# Site vitrine — Alicia Semenchuk Coach

Site web professionnel pour **Alicia Semenchuk** (coaching de vie, coaching sportif, yoga). Application single-page construite avec **React** et **Vite**, navigation via **React Router**.

Dépôt GitHub : [siteWeb_Alicia_Coach](https://github.com/Dmytro-16/siteWeb_Alicia_Coach)

## Stack technique

| Outil | Rôle |
|--------|------|
| [Vite 8](https://vite.dev/) | Build et serveur de développement |
| [React 19](https://react.dev/) | Interface utilisateur |
| [React Router 7](https://reactrouter.com/) | Routes et liens internes |
| ESLint | Qualité du code (`npm run lint`) |

## Prérequis

- **Node.js** 20+ (recommandé)
- **npm** (fourni avec Node)

## Installation

```bash
cd SITE/alicia_coach
npm install
```

> Sur certaines configurations Windows, `npm install` peut échouer avec une erreur SSL (`UNABLE_TO_VERIFY_LEAF_SIGNATURE`). En dernier recours : `npm config set strict-ssl false`, relancer l’install, puis `npm config delete strict-ssl` pour rétablir la vérification.

## Variables d’environnement

1. Copier `.env.example` vers `.env` à la racine du projet.
2. Renseigner les variables préfixées par `VITE_` (exposées au front via `import.meta.env`).

| Variable | Description |
|----------|-------------|
| `VITE_CONTACT_EMAIL` | Adresse e-mail affichée / utilisée pour le contact |

Le fichier `.env` est **local** et ne doit **pas** être commité (voir `.gitignore`).

## Scripts npm

| Commande | Action |
|----------|--------|
| `npm run dev` | Serveur de développement (URL affichée dans le terminal, souvent `http://localhost:5173`) |
| `npm run build` | Build de production dans `dist/` |
| `npm run preview` | Prévisualisation du build local |
| `npm run lint` | Analyse ESLint |

## Structure du projet

```
alicia_coach/
├── index.html          # Point d’entrée HTML
├── public/             # Fichiers servis tels quels (ex. charte couleurs)
├── images/             # Assets statiques référencés par index.html (favicon, etc.)
├── src/
│   ├── main.jsx        # Montage React
│   ├── App.jsx         # Layout, routes, header / footer
│   └── index.css       # Styles globaux
├── components/         # NavBar, Footer, signature, bouton RDV, snippet contact
└── pages/              # Une page par route
```

La charte visuelle et certains libellés de référence sont dans `public/color/text.json`.

## Pages et routes

| Route | Page |
|-------|------|
| `/` | Accueil |
| `/a-propos` | À propos |
| `/accomplishments` | Accompagnements |
| `/mon-parcours` | Mon parcours |
| `/temoignages` | Témoignages |
| `/contact` | Contact |
| `/rdv` | Prise de rendez-vous |
| `/mentions-legales` | Mentions légales |
| `/politique-de-confidentialite` | Politique de confidentialité |
| `/faq` | FAQ |
| `/paiement` | Paiement |
| `*` | Page 404 |

## Déploiement

Après `npm run build`, héberger le contenu du dossier **`dist/`** sur un hébergeur statique (Netlify, Vercel, GitHub Pages avec action dédiée, etc.). Configurer les **redirects SPA** : toutes les routes doivent renvoyer vers `index.html` pour que React Router fonctionne en production.

## Licence

Projet **privé** (`"private": true` dans `package.json`). Tous droits réservés — Alicia Semenchuk / équipe projet.
