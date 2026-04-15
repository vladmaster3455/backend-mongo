#  MiniBank - Application Bancaire Complète

Application web de gestion bancaire avec React (frontend) et Express/MongoDB (backend).

##  Structure du projet

```
projet/
├── mongo/                    # Backend API (Node.js + Express + MongoDB)
│   ├── models/              # Modèles Mongoose
│   ├── routes/              # Routes de l'API
│   ├── server.js            # Point d'entrée du serveur
│   ├── package.json         # Dépendances backend
│   └── .env.example         # Template de configuration
│
├── src/                     # Frontend React
│   ├── components/          # Composants réutilisables
│   ├── pages/              # Pages de l'application
│   ├── config/             # Configuration API
│   └── App.js              # Composant racine
│
├── public/                  # Assets statiques
├── package.json            # Dépendances frontend
├── .env.example            # Template configuration frontend
├── .gitignore              # Fichiers à ignorer
└── README.md               # Ce fichier
```

##  Technologies utilisées

### Backend
- **Node.js** & **Express** - Serveur API REST
- **MongoDB Atlas** - Base de données cloud
- **Mongoose** - ODM pour MongoDB
- **JWT** - Authentification sécurisée
- **Bcrypt** - Hashage des mots de passe
- **Multer** - Gestion des uploads de fichiers

### Frontend
- **React 18** - Bibliothèque UI
- **Material-UI (MUI)** - Framework de composants
- **React Router v6** - Navigation
- **Fetch API** - Requêtes HTTP

## 📦 Installation locale

### 1. Cloner le dépôt

```bash
git clone https://github.com/vladmaster3455/backend-mongo.git
cd backend-mongo/projet
```

### 2. Installer le Backend

```bash
cd mongo
npm install
cp .env.example .env
# Éditez .env avec vos credentials MongoDB Atlas
npm start
```

Le backend démarre sur `http://localhost:5000`

### 3. Installer le Frontend

```bash
# Depuis la racine projet/
npm install
cp .env.example .env
# Vérifiez que REACT_APP_API_URL pointe vers votre backend
npm start
```

Le frontend démarre sur `http://localhost:3000`


- **Backend (Render)** :t
