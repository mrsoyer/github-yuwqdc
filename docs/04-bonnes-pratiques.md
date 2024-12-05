# Bonnes Pratiques

## Conventions de Nommage

### Fichiers et Dossiers
- Components: PascalCase (`SearchBar.tsx`)
- Utilitaires: camelCase (`formatPrice.ts`)
- Pages: kebab-case (`property-details.tsx`)
- Tests: `*.test.tsx` ou `*.spec.tsx`

### Code
```typescript
// Components
function PropertyCard() { ... }

// Hooks
const usePropertySearch = () => { ... }

// Utils
function formatPrice() { ... }

// Types
interface PropertyDetails { ... }
type SearchFilters = { ... }
```

## Standards de Code

### Components
```typescript
// ✅ Bon
export function PropertyCard({ title, price }: PropertyCardProps) {
  return (
    <div className="property-card">
      <h3>{title}</h3>
      <p>{formatPrice(price)}</p>
    </div>
  );
}

// ❌ À éviter
export default function({ title, price }) {
  return <div className="card">{title} - {price}€</div>;
}
```

### Hooks
```typescript
// ✅ Bon
function usePropertyFilters() {
  const [filters, setFilters] = useState<Filters>({});
  
  useEffect(() => {
    // Effet clairement défini
  }, [/* dépendances explicites */]);
  
  return { filters, setFilters };
}

// ❌ À éviter
function useFilters() {
  const [state, setState] = useState();
  useEffect(() => {}, []); // Effet vague
}
```

## Processus de Versioning

### Branches
- `main`: Production
- `develop`: Développement
- `feature/*`: Nouvelles fonctionnalités
- `fix/*`: Corrections de bugs

### Commits
```
feat: ajoute la recherche par carte
fix: corrige l'affichage des prix
docs: met à jour la documentation
style: améliore le style des cartes
```

## Tests et Qualité

### Tests Unitaires
```typescript
describe('PropertyCard', () => {
  it('should render property details', () => {
    render(<PropertyCard {...mockProps} />);
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
  });
});
```

### Tests d'Intégration
```typescript
describe('SearchProperties', () => {
  it('should filter properties', async () => {
    render(<SearchProperties />);
    await userEvent.type(screen.getByRole('textbox'), 'Paris');
    expect(await screen.findByText(/résultats/i)).toBeInTheDocument();
  });
});
```

### Qualité de Code
- ESLint pour le linting
- Prettier pour le formatage
- TypeScript pour le typage
- Husky pour les pre-commit hooks