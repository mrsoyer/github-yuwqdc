import { SearchProperties } from "@/components/search/search-properties";
import { FeaturedProperties } from "@/components/properties/featured-properties";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { LatestBlogPosts } from "@/components/blog/latest-posts";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-8">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Trouvez votre bien immobilier idéal
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Des milliers de biens disponibles partout en France
          </p>
          <SearchProperties />
        </div>
      </section>

      {/* Featured Properties */}
      <section className="container">
        <h2 className="text-3xl font-bold text-center mb-8">
          Biens en vedette
        </h2>
        <FeaturedProperties />
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pourquoi choisir Weinvest ?
          </h2>
          <WhyChooseUs />
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="container mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Derniers articles
        </h2>
        <LatestBlogPosts />
      </section>
    </div>
  );
}