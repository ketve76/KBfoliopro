# Portfolio - Kevin Brunez 🚀

> **Data Analyst · Conseiller Numérique · Expert IA & Web3**

Code source du portfolio professionnel de Kevin Brunez : démonstration d'une expertise hybride **Stratégie Business + Tech Avancée (IA / Blockchain)**.

## 🌟 Fonctionnalités

- **Design cyberpunk / glassmorphism** — animations fluides, effets glitch.
- **Assistant IA (Nexus AI)** — chatbot Gemini, **clé API jamais exposée au navigateur** (Netlify Function `/api/chat`).
- **Rate-limit côté serveur** — 10 messages / 24h par IP, infalsifiable.
- **Formulaire de contact fonctionnel** — branché sur Netlify Forms + honeypot anti-spam.
- **Conformité Loi 25 (Québec) / RGPD (UE)** — politique de confidentialité, mentions légales, bandeau consentement, consent gate avant l'envoi de messages à Google Gemini.
- **Polices privacy-friendly** — Bunny Fonts (UE, sans tracking) au lieu de Google Fonts.
- **Headers de sécurité** — CSP, HSTS, X-Frame-Options, Permissions-Policy.

## 🛠 Stack technique

- **Frontend** : React 19, TypeScript, Vite 6.
- **Styling** : Tailwind CSS (via CDN).
- **Icons** : Lucide React.
- **IA** : Google Gemini API (`gemini-2.5-flash`) via Netlify Function.
- **Hébergement** : Netlify (recommandé) — `netlify.toml` inclus.

## 🚀 Démarrage local

```bash
git clone https://github.com/ketve76/KBfoliopro.git
cd KBfoliopro
npm install

# 1. Copier .env.example en .env et y mettre votre clé Gemini
cp .env.example .env

# 2. Lancer en local AVEC les fonctions Netlify (chat IA fonctionnel)
npm run dev       # nécessite netlify-cli : npm i -g netlify-cli

# OU sans les fonctions (chat IA non fonctionnel) :
npm run dev:vite
```

## 🔐 Variables d'environnement

| Variable | Portée | Description |
|---|---|---|
| `GEMINI_API_KEY` | **Serveur uniquement** | Clé API Google Gemini. À configurer dans Netlify → Site settings → Environment variables. |

> ⚠️ La clé n'est **jamais** injectée dans le bundle client (cf. `vite.config.ts`).

## 📂 Structure

```
/
├── netlify/
│   └── functions/
│       └── chat.ts          # Endpoint Gemini sécurisé (/api/chat)
├── components/              # React components
├── services/
│   └── geminiService.ts     # Wrapper fetch → /api/chat (zéro clé côté client)
├── App.tsx
├── index.html
├── netlify.toml             # Build config + headers sécurité
└── vite.config.ts
```

## 📜 Aspects juridiques

Ce portfolio respecte :
- **Loi 25 (Québec)** — protection des renseignements personnels.
- **RGPD (UE)** — droits d'accès, rectification, suppression, portabilité.
- **LPRPDE (Canada fédéral)** — consentement et information.

Les modaux « Mentions légales » et « Politique de confidentialité » sont accessibles depuis le footer.

## 👤 Auteur

**Kevin Brunez** — Coordonnateur Données & BI @ OIQ · Montréal, Québec.
LinkedIn : <https://www.linkedin.com/in/kevin-brunez-434121263/>
