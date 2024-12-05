# Structure du Projet

## Arborescence
```
weinvest/
├── app/
│   ├── globals.css          # Styles globaux et variables Tailwind
│   ├── layout.tsx           # Layout principal de l'application
│   └── page.tsx             # Page d'accueil
├── components/
│   ├── blog/
│   │   └── latest-posts.tsx # Composant des derniers articles
│   ├── layout/
│   │   ├── header.tsx       # En-tête de l'application
│   │   └── footer.tsx       # Pied de page
│   ├── properties/
│   │   └── featured-properties.tsx # Propriétés en vedette
│   ├── search/
│   │   └── search-properties.tsx   # Barre de recherche
│   ├── sections/
│   │   └── why-choose-us.tsx       # Section avantages
│   ├── ui/                  # Composants UI réutilisables
│   └── theme-provider.tsx   # Provider du thème
├── lib/
│   └── utils.ts            # Utilitaires partagés
├── public/                 # Assets statiques
└── styles/                 # Styles supplémentaires
```

## Organisation des Composants

### Principes
- Architecture modulaire
- Composants atomiques
- Séparation des responsabilités
- Réutilisabilité maximale

### Hiérarchie des Composants
```
Components/
├── Layout      # Composants structurels
├── UI          # Composants de base réutilisables
├── Features    # Composants métier
└── Sections    # Sections de page complètes
```

## Fichiers de Configuration

### Next.js
```js
// next.config.js
module.exports = {
  output: 'export',        // Build statique
  eslint: {
    ignoreDuringBuilds: true
  },
  images: { 
    unoptimized: true     // Pour export statique
  }
}
```

### Tailwind
```js
// tailwind.config.ts
{
  content: [...],     // Fichiers à scanner
  theme: {
    extend: {
      colors: {...},  // Palette personnalisée
      spacing: {...}, // Espacements
    }
  },
  plugins: [...]     // Plugins additionnels
}
```

### TypeScript
```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```