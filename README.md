# MiniBank - Application Bancaire Complète

Application web de gestion bancaire : frontend **React** (Material-UI) et backend API **Node.js/Express** avec **MongoDB**.

## Structure du projet

```
backend-mongo/
├── mongo/                    # Backend API (Node.js + Express + MongoDB)
│   ├── models/               # Modèles Mongoose
│   ├── routes/               # Routes de l'API (auth, users, transactions, upload)
│   ├── config/               # Configuration (Cloudinary, upload)
│   ├── server.js             # Point d'entrée du serveur
│   ├── test.js               # Script de seed (données de test)
│   ├── check-config.js       # Vérification de la configuration
│   ├── .env.example          # Template de configuration backend
│   └── README.md             # Documentation complète de l'API
│
├── src/                      # Frontend React
│   ├── components/           # Composants réutilisables
│   ├── pages/                # Pages de l'application
│   ├── config/               # Configuration API
│   └── App.js                # Composant racine
│
├── public/                   # Assets statiques
├── .env.example              # Template de configuration frontend
├── .gitignore
└── README.md
```

## Technologies utilisées

### Backend
- **Node.js** & **Express** — serveur API REST
- **MongoDB Atlas** — base de données cloud
- **Mongoose** — ODM pour MongoDB
- **JWT** — authentification sécurisée
- **Bcrypt** — hashage des mots de passe
- **Multer** + **Cloudinary** — upload de fichiers

### Frontend
- **React 18** — bibliothèque UI
- **Material-UI (MUI)** — framework de composants
- **React Router v6** — navigation
- **Fetch API** — requêtes HTTP

## Installation locale

### 1. Cloner le dépôt

```bash
git clone https://github.com/vladmaster3455/backend-mongo.git
cd backend-mongo
```

### 2. Installer le Backend

```bash
cd mongo
npm install
cp .env.example .env
# Éditez .env avec vos identifiants MongoDB Atlas
npm start
```

Le backend démarre sur `http://localhost:5000`

### 3. Installer le Frontend

```bash
# Depuis la racine du projet
npm install
cp .env.example .env
# Vérifiez que REACT_APP_API_URL pointe vers votre backend
npm start
```

Le frontend démarre sur `http://localhost:3000`

## Variables d'environnement

### Backend (`mongo/.env`)

| Variable | Description |
|---|---|
| `PORT` | Port du serveur Express (défaut: 5000) |
| `MONGODB_URI` | URI de connexion MongoDB (Atlas ou local) |
| `JWT_SECRET` | Clé secrète JWT (unique, à changer en production) |
| `NODE_ENV` | Environnement (development/production) |
| `API_PREFIX` | Préfixe des routes API (ex: `/serge`) |

### Frontend (`.env`)

| Variable | Description |
|---|---|
| `REACT_APP_API_URL` | URL du backend (ex: `http://localhost:5000/serge`) |

## Scripts utiles

```bash
# Backend (dossier mongo/)
npm start          # Démarrer le serveur API
npm run dev        # Mode développement (nodemon)
node test.js       # Peupler la base avec des données de test
node check-config.js  # Vérifier la configuration

# Frontend (racine)
npm start          # Démarrer l'application React
npm run build      # Build de production
npm test           # Lancer les tests
```

## Comptes de test

Créés par `node test.js` (mot de passe commun : `Passer123!`):

| Type | Email |
|---|---|
| Agent | `agent@minibank.sn` |
| Distributeur | `fatou.diop@minibank.sn`, `mamadou.ndiaye@minibank.sn` |
| Client | `aissatou.fall@gmail.com`, `ibrahima.sarr@gmail.com`, `mariama.sow@gmail.com` |

## Documentation de l'API

La documentation complète des endpoints (authentification, utilisateurs, transactions) est disponible dans [mongo/README.md](mongo/README.md).
