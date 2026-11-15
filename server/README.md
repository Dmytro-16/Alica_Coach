# Couche serveur (local + services métier)

| Élément | Rôle |
|---------|------|
| `dev-api.mjs` | Serveur **Express** local (port 3001) — même routes que la prod |
| `services/contact/` | Validation du formulaire contact |
| `services/testimonials/` | Modèle Mongo ; `GET /api/testimonials`, `POST /api/testimonials/submit` |
| `services/mongo/` | Connexion MongoDB Atlas |
| `services/stripe/` | Checkout Stripe (secrets serveur) |

**Production :** les entrées HTTP sont dans `api/` (Vercel). Elles importent les modules de `server/services/`.

**Client :** React dans `pages/`, `components/`, `src/` — appelle `/api/*` uniquement.
