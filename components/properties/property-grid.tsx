"use client";

import { useState } from "react";
import { PropertyCard } from "./property-card";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";

const PROPERTIES = [
  // ... (using the same data as in featured-properties.tsx)
];

export function PropertyGrid() {
  const [page, setPage] = useState(1);
  const searchParams = useSearchParams();
  
  // Filter properties based on search params
  const filteredProperties = PROPERTIES.filter(property => {
    const location = searchParams.get("location")?.toLowerCase();
    const type = searchParams.get("type");
    const budget = searchParams.get("budget");
    
    return (!location || property.location.toLowerCase().includes(location)) &&
           (!type || property.type.toLowerCase() === type.toLowerCase()) &&
           (!budget || property.price <= parseInt(budget));
  });

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      {filteredProperties.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Aucun bien ne correspond à vos critères.</p>
        </div>
      )}
      {filteredProperties.length > 0 && (
        <div className="mt-8 flex justify-center">
          <Button
            variant="outline"
            onClick={() => setPage(p => p + 1)}
          >
            Charger plus de biens
          </Button>
        </div>
      )}
    </div>
  );
}