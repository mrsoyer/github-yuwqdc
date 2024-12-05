import { useBlogPosts } from '@/hooks/use-blog-posts';
import { BlogPostCard } from './blog-post-card';

export function LatestBlogPosts() {
  const { posts, isLoading, error } = useBlogPosts({ limit: 3 });

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Une erreur est survenue</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </div>
  );
}