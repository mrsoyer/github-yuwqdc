"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Bed, Bath, Square } from "lucide-react";

const FEATURED_PROPERTIES = [
  {
    id: 1,
    title: "Villa de luxe avec piscine",
    location: "Cannes, Alpes-Maritimes",
    price: 2500000,
    bedrooms: 5,
    bathrooms: 4,
    surface: 350,
    type: "Villa",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
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
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
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
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export function FeaturedProperties() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {FEATURED_PROPERTIES.map((property) => (
        <Link href={`/properties/${property.id}`} key={property.id}>
          <Card className="group hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="p-0">
              <div className="relative h-48 w-full">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
                <Badge className="absolute top-4 right-4">{property.type}</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                {property.title}
              </h3>
              <div className="flex items-center text-muted-foreground mt-2">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm">{property.location}</span>
              </div>
              <div className="flex items-center justify-between mt-4 text-sm">
                <div className="flex items-center">
                  <Bed className="h-4 w-4 mr-1" />
                  <span>{property.bedrooms}</span>
                </div>
                <div className="flex items-center">
                  <Bath className="h-4 w-4 mr-1" />
                  <span>{property.bathrooms}</span>
                </div>
                <div className="flex items-center">
                  <Square className="h-4 w-4 mr-1" />
                  <span>{property.surface} m²</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <p className="text-lg font-bold">
                {property.price.toLocaleString('fr-FR')} €
              </p>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}