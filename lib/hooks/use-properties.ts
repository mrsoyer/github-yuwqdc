"use client";

import { useState, useEffect } from 'react';
import { Property } from '@/lib/data/properties';
import { getProperties } from '@/lib/api';

export function useProperties(filters?: {
  location?: string;
  type?: string;
  minPrice?: number;
  maxPrice?: number;
}) {
  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchProperties() {
      try {
        setIsLoading(true);
        const data = await getProperties(filters);
        setProperties(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch properties'));
      } finally {
        setIsLoading(false);
      }
    }

    fetchProperties();
  }, [filters]);

  return { properties, isLoading, error };
}