import { SearchProperties } from "@/components/search/search-properties";
import { PropertyGrid } from "@/components/properties/property-grid";

export default function PropertiesPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Rechercher un bien</h1>
      <SearchProperties />
      <div className="mt-8">
        <PropertyGrid />
      </div>
    </div>
  );
}