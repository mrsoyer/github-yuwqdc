import { Shield, Star, Clock, Users } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const FEATURES = [
  {
    icon: Shield,
    title: "Sécurité garantie",
    description: "Toutes nos transactions sont sécurisées et conformes à la réglementation en vigueur."
  },
  {
    icon: Star,
    title: "Expertise reconnue",
    description: "Notre réseau d'agents immobiliers possède une expertise approfondie du marché local."
  },
  {
    icon: Clock,
    title: "Réactivité",
    description: "Nous nous engageons à répondre à toutes vos demandes dans les plus brefs délais."
  },
  {
    icon: Users,
    title: "Accompagnement personnalisé",
    description: "Un conseiller dédié vous accompagne tout au long de votre projet immobilier."
  }
];

export function WhyChooseUs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {FEATURES.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <Card key={index} className="text-center">
            <CardHeader>
              <div className="mx-auto bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                <Icon className="h-6 w-6 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}