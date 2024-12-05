import { NextResponse } from 'next/server';
import { blogPosts } from '@/lib/data/blog';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category')?.toLowerCase();
  const limit = searchParams.get('limit');

  let filteredPosts = [...blogPosts];

  if (category) {
    filteredPosts = filteredPosts.filter(post =>
      post.category?.toLowerCase() === category
    );
  }

  if (limit) {
    filteredPosts = filteredPosts.slice(0, parseInt(limit));
  }

  return NextResponse.json(filteredPosts);
}