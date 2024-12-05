import { NextResponse } from 'next/server';
import { properties } from '@/lib/data/properties';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get('location')?.toLowerCase();
  const type = searchParams.get('type');
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');

  let filteredProperties = [...properties];

  if (location) {
    filteredProperties = filteredProperties.filter(property =>
      property.location.toLowerCase().includes(location)
    );
  }

  if (type) {
    filteredProperties = filteredProperties.filter(property =>
      property.type.toLowerCase() === type.toLowerCase()
    );
  }

  if (minPrice) {
    filteredProperties = filteredProperties.filter(property =>
      property.price >= parseInt(minPrice)
    );
  }

  if (maxPrice) {
    filteredProperties = filteredProperties.filter(property =>
      property.price <= parseInt(maxPrice)
    );
  }

  return NextResponse.json(filteredProperties);
}