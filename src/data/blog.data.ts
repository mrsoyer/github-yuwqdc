export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  image: string;
  author: string;
  category?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Les tendances du marché immobilier en 2024",
    excerpt: "Découvrez les dernières tendances qui façonnent le marché immobilier français cette année.",
    date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Marie Laurent",
    category: "Marché Immobilier",
    content: "Article complet sur les tendances du marché immobilier..."
  },
  {
    id: 2,
    title: "Comment bien estimer son bien immobilier",
    excerpt: "Guide pratique pour estimer la valeur de votre bien immobilier au plus juste prix.",
    date: "2024-03-10",
    image: "https://images.unsplash.com/photo-1556156653-e5a7676bf6cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Thomas Dubois",
    category: "Conseils",
    content: "Guide détaillé sur l'estimation immobilière..."
  },
  {
    id: 3,
    title: "Les étapes clés pour réussir son achat immobilier",
    excerpt: "De la recherche à la signature, suivez notre guide pour un achat immobilier réussi.",
    date: "2024-03-05",
    image: "https://images.unsplash.com/photo-1560518883-b21832ef2d98?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Sophie Martin",
    category: "Guide",
    content: "Les étapes détaillées pour réussir son achat..."
  }
];