import { PropertyCard } from './property-card';
import { useProperties } from '@/hooks/use-properties';

export function FeaturedProperties() {
  const { properties, isLoading, error } = useProperties({ limit: 3 });

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Une erreur est survenue</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}