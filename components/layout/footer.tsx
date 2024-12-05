import Link from "next/link";
import { Building2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Building2 className="h-6 w-6" />
              <span className="font-bold text-xl">Weinvest</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Votre partenaire immobilier de confiance depuis 2024.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/">Accueil</Link></li>
              <li><Link href="/properties">Biens</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/buy">Acheter</Link></li>
              <li><Link href="/sell">Vendre</Link></li>
              <li><Link href="/rent">Louer</Link></li>
              <li><Link href="/estimate">Estimer</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>+33 1 23 45 67 89</li>
              <li>contact@weinvest.fr</li>
              <li>123 Avenue des Champs-Élysées</li>
              <li>75008 Paris, France</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Weinvest. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}