"use client";

import { useState, useEffect } from 'react';
import { BlogPost } from '@/lib/data/blog';
import { getBlogPosts } from '@/lib/api';

export function useBlogPosts(options?: {
  category?: string;
  limit?: number;
}) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsLoading(true);
        const data = await getBlogPosts(options);
        setPosts(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch blog posts'));
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, [options]);

  return { posts, isLoading, error };
}