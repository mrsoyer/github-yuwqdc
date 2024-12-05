export interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  surface: number;
  type: string;
  image: string;
  description?: string;
  features?: string[];
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Villa de luxe avec piscine",
    location: "Cannes, Alpes-Maritimes",
    price: 2500000,
    bedrooms: 5,
    bathrooms: 4,
    surface: 350,
    type: "Villa",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Magnifique villa avec vue mer panoramique",
    features: ["Piscine", "Jardin", "Garage", "Terrasse"]
  },
  {
    id: 2,
    title: "Appartement vue mer",
    location: "Nice, Alpes-Maritimes",
    price: 850000,
    bedrooms: 3,
    bathrooms: 2,
    surface: 120,
    type: "Appartement",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Superbe appartement rénové avec vue mer",
    features: ["Vue mer", "Balcon", "Parking", "Cave"]
  },
  {
    id: 3,
    title: "Maison contemporaine",
    location: "Bordeaux, Gironde",
    price: 750000,
    bedrooms: 4,
    bathrooms: 3,
    surface: 200,
    type: "Maison",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Belle maison moderne avec jardin",
    features: ["Jardin", "Garage", "Cave", "Cuisine équipée"]
  }
];