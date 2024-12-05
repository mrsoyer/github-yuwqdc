import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const LATEST_POSTS = [
  {
    id: 1,
    title: "Les tendances du marché immobilier en 2024",
    excerpt: "Découvrez les dernières tendances qui façonnent le marché immobilier français cette année.",
    date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Marie Laurent"
  },
  {
    id: 2,
    title: "Comment bien estimer son bien immobilier",
    excerpt: "Guide pratique pour estimer la valeur de votre bien immobilier au plus juste prix.",
    date: "2024-03-10",
    image: "https://images.unsplash.com/photo-1556156653-e5a7676bf6cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Thomas Dubois"
  },
  {
    id: 3,
    title: "Les étapes clés pour réussir son achat immobilier",
    excerpt: "De la recherche à la signature, suivez notre guide pour un achat immobilier réussi.",
    date: "2024-03-05",
    image: "https://images.unsplash.com/photo-1560518883-b21832ef2d98?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Sophie Martin"
  }
];

export function LatestBlogPosts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {LATEST_POSTS.map((post) => (
        <Link href={`/blog/${post.id}`} key={post.id}>
          <Card className="h-full group hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="p-0">
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                {post.excerpt}
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(post.date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}