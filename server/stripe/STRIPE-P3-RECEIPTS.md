# P3 — Reçus e-mail Stripe (clients)

Checklist **Dashboard Stripe** + test local (mode test). Aucun code obligatoire sur le site : Stripe envoie le reçu quand l’acheteur saisit son e-mail sur la page Checkout.

## 1. Activer les e-mails dans Stripe

1. Connexion [Stripe Dashboard](https://dashboard.stripe.com) (bascule **Mode test** pour les essais).
2. **Paramètres** (engrenage) → **E-mails clients** / **Customer emails**.
3. Activer **Reçus pour les paiements réussis** (*Successful payments*).
4. Vérifier l’adresse **E-mail d’expédition** et le nom affiché (branding → **Paramètres publics** si besoin).

## 2. Parcours client complet (test)

1. Local : `npm run dev` + `npm run dev:api` (si contact / checkout via proxy).
2. Variables `.env` : `STRIPE_SECRET_KEY` (sk_test_…), `STRIPE_PRICE_SEANCE` ou pack, `SITE_URL=http://localhost:5173`.
3. Sur le site : **Tarifs** ou **RDV** → **Payer** → redirection `checkout.stripe.com`.
4. Carte test : `4242 4242 4242 4242`, date future, CVC quelconque.
5. Saisir une **vraie adresse e-mail** que tu consultes (ou [e-mails test Stripe](https://stripe.com/docs/testing#test-email)).
6. Valider le paiement → retour ` /paiement?checkout=success` (éventuellement `&from=rdv`).
7. Vérifier :
   - Dashboard → **Paiements** : transaction en test ;
   - Boîte mail : **reçu Stripe** (peut arriver avec quelques minutes de délai).

## 3. Prod (alica-coach.vercel.app)

Même réglage en **mode Live** après bascule des clés live sur Vercel. Refaire un paiement test minimal si tu utilises encore des clés test en preview.

## 4. Dépannage

| Symptôme | Piste |
|----------|--------|
| Pas de mail | E-mails clients désactivés, mail en spam, ou e-mail non saisi sur Checkout |
| Paiement OK, pas de reçu | Voir **Paiements** → détail → **Reçu** ; renvoyer manuellement depuis le Dashboard |
| Local bloqué | Antivirus / proxy (ex. Avast) sur `checkout.stripe.com` |

**Suite optionnelle (S2)** : webhook `checkout.session.completed` pour journaliser en Mongo — hors scope P3.