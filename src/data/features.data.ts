import { Shield, Star, Clock, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
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