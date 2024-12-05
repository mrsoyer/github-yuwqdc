import { HomeHero } from './hero';
import { HomeFeatures } from './features';
import { FeaturedProperties } from '@/elements/element-properties/design/featured-properties';
import { LatestBlogPosts } from '@/elements/element-blog/design/latest-posts';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 py-8">
      <HomeHero />
      
      <section className="container">
        <h2 className="text-3xl font-bold text-center mb-8">
          Biens en vedette
        </h2>
        <FeaturedProperties />
      </section>

      <HomeFeatures />

      <section className="container mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Derniers articles
        </h2>
        <LatestBlogPosts />
      </section>
    </div>
  );
}