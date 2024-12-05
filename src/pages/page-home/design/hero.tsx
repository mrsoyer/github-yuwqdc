import React from 'react';
import { SearchProperties } from '@/elements/element-search/design/search-properties';

export function HomeHero() {
  return (
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
  );
}