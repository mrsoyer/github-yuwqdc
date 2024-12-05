# Architecture Technique

## Stack Technologique

### Frontend
- **Framework**: Next.js 13.5.1 (React 18.2.0)
- **Language**: TypeScript 5.2.2
- **Styling**: Tailwind CSS 3.3.3
- **Composants UI**: shadcn/ui (basé sur Radix UI)
- **Icons**: Lucide React
- **Formulaires**: React Hook Form avec validation Zod
- **Gestion des thèmes**: next-themes
- **Internationalisation**: Format natif (Intl)

### Performance et Optimisation
- **Images**: Next.js Image Optimization
- **Fonts**: Next.js Font Optimization (Google Fonts)
- **CSS**: Tailwind JIT Compiler
- **Bundle**: Webpack (intégré à Next.js)

### Qualité de Code
- **Linting**: ESLint avec configuration Next.js
- **Types**: TypeScript strict mode
- **Formatage**: Prettier (implicite)

## Infrastructure

### Environnements
```
├── Development
│   ├── Local: `npm run dev`
│   └── Preview: Vercel Preview Deployments
│
└── Production
    └── Static Export: `next build && next export`
```

### Optimisations Production
- Static Site Generation (SSG)
- Images optimisées
- CSS minifié
- Code splitting automatique
- Prefetching intelligent

## Base de Données (À implémenter)

### Schema Prisma proposé
```prisma
model Property {
  id          String   @id @default(cuid())
  title       String
  description String
  price       Float
  type        String
  location    String
  surface     Float
  bedrooms    Int
  bathrooms   Int
  features    String[]
  images      Image[]
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Image {
  id         String   @id @default(cuid())
  url        String
  property   Property @relation(fields: [propertyId], references: [id])
  propertyId String
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  favorites String[] // Property IDs
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## APIs et Services Externes

### Intégrations Prévues
- API de géocodage pour la recherche de localisation
- Service de stockage d'images (ex: Cloudinary)
- Système de paiement (ex: Stripe)
- CRM immobilier
- Système de notifications