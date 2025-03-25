# Impact Eco Group

Une application web moderne pour la gestion de projets écologiques et durables en République Démocratique du Congo.

## Configuration requise

- Node.js (v18 ou supérieur)
- MongoDB
- npm ou yarn

## Installation

1. Cloner le repository :
```bash
git clone <repository-url>
cd impact-eco-group
```

2. Installer les dépendances du frontend :
```bash
npm install
```

3. Installer les dépendances du backend :
```bash
cd server
npm install
```

4. Créer un fichier `.env` à la racine du dossier `server` avec les variables suivantes :
```env
MONGODB_URI=votre_uri_mongodb
JWT_SECRET=votre_secret_jwt
PORT=3000
```

## Démarrage de l'application

1. Démarrer le serveur backend :
```bash
cd server
npm run dev
```
Le serveur démarrera sur http://serverisigsite.onrender.com

2. Dans un nouveau terminal, démarrer le frontend :
```bash
npm run dev
```
L'application frontend sera accessible sur http://localhost:5173

## Fonctionnalités principales

- Authentification des utilisateurs
- Chat en temps réel avec Socket.IO
- Blog avec gestion des articles
- Gestion des projets écologiques
- Interface administrative
- Design responsive

## Structure du projet

```
impact-eco-group/
├── src/                    # Code source frontend
│   ├── components/         # Composants React
│   ├── pages/             # Pages de l'application
│   ├── stores/            # État global (Zustand)
│   └── ...
├── server/                 # Code source backend
│   ├── models/            # Modèles Mongoose
│   ├── routes/            # Routes Express
│   └── ...
└── ...
```

## API Backend

### Authentification

- POST `/api/users/register` - Inscription
- POST `/api/users/login` - Connexion

### Messages

- GET `/api/messages` - Récupérer les messages
- POST `/api/messages` - Envoyer un message

### Blog

- GET `/api/blog` - Récupérer les articles
- POST `/api/blog` - Créer un article
- PATCH `/api/blog/:id` - Modifier un article
- DELETE `/api/blog/:id` - Supprimer un article

## Socket.IO Events

- `connect` - Connexion au serveur Socket.IO
- `join_chat` - Rejoindre une conversation
- `send_message` - Envoyer un message
- `receive_message` - Recevoir un message

## Contribution

1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Créer une Pull Request
