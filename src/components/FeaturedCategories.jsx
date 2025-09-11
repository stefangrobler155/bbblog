// components/FeaturedCategories.js
"use client";

export default function FeaturedCategories({ categories }) {
    console.log(categories);
    
  if (!categories || categories.length === 0) {
    return <p className="text-center py-12">No categories found</p>;
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Explore Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
            <a
            key={cat.id}
            href={cat.link} // now safe, points to /category/slug
            className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
            {cat.image && (
                <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform"
                />
            )}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span
                className="text-white text-xl font-bold px-4 py-2 rounded-md"
                style={{ backgroundColor: cat.color }}
                >
                {cat.name}
                </span>
            </div>
            </a>

        ))}
      </div>
    </section>
  );
}
