# Guide d'Installation

## Prérequis Système

- Node.js >= 18.17.0
- npm >= 9.6.7
- Git (optionnel)

## Installation

1. **Cloner le projet**
```bash
git clone https://github.com/weinvest/website.git
cd website
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Variables d'environnement**
Créer un fichier `.env.local` :
```env
# Base de données (à venir)
DATABASE_URL="postgresql://..."

# API Keys (à venir)
NEXT_PUBLIC_MAPS_API_KEY="..."
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="..."
```

4. **Lancer le développement**
```bash
npm run dev
```

5. **Build production**
```bash
npm run build
```

## Scripts Disponibles

- `npm run dev` : Démarre le serveur de développement
- `npm run build` : Crée la version de production
- `npm run start` : Lance la version de production
- `npm run lint` : Vérifie le code avec ESLint

## Ports et URLs

- Développement : http://localhost:3000
- Production : À définir selon l'hébergement

## Troubleshooting

### Erreurs communes

1. **Module not found**
```bash
npm install
```

2. **Port déjà utilisé**
```bash
kill -9 $(lsof -t -i:3000)
```

3. **Problèmes de cache**
```bash
rm -rf .next
npm run dev
```