import { Property } from './data/properties';
import { BlogPost } from './data/blog';

export async function getProperties(filters?: {
  location?: string;
  type?: string;
  minPrice?: number;
  maxPrice?: number;
}): Promise<Property[]> {
  const params = new URLSearchParams();
  
  if (filters?.location) params.append('location', filters.location);
  if (filters?.type) params.append('type', filters.type);
  if (filters?.minPrice) params.append('minPrice', filters.minPrice.toString());
  if (filters?.maxPrice) params.append('maxPrice', filters.maxPrice.toString());

  const response = await fetch(`/api/properties?${params.toString()}`);
  if (!response.ok) throw new Error('Failed to fetch properties');
  
  return response.json();
}

export async function getProperty(id: number): Promise<Property> {
  const response = await fetch(`/api/properties/${id}`);
  if (!response.ok) throw new Error('Failed to fetch property');
  
  return response.json();
}

export async function getBlogPosts(options?: {
  category?: string;
  limit?: number;
}): Promise<BlogPost[]> {
  const params = new URLSearchParams();
  
  if (options?.category) params.append('category', options.category);
  if (options?.limit) params.append('limit', options.limit.toString());

  const response = await fetch(`/api/blog?${params.toString()}`);
  if (!response.ok) throw new Error('Failed to fetch blog posts');
  
  return response.json();
}

export async function getBlogPost(id: number): Promise<BlogPost> {
  const response = await fetch(`/api/blog/${id}`);
  if (!response.ok) throw new Error('Failed to fetch blog post');
  
  return response.json();
}