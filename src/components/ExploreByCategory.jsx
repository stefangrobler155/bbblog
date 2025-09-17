import Link from "next/link";
import Image from "next/image";

export default function ExploreByCategory({ categories }) {
    // console.log("ExploreByCategory", categories);
    
  return (
    <section className="p-8 bg-white">
      <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6" style={{ color: "var(--dark-text)" }}>
        Explore by Category
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.slug}`}
            className="block p-4 rounded-lg shadow hover:shadow-lg transition bg-[var(--accent)] text-[var(--light-text)]"
          >
            <div className="flex flex-col items-center text-center">
              <Image
                src={
                  category.acf?.bb_category_image || // Adjust based on your custom field
                  "/images/category-fallback.jpg"
                }
                alt={category.name}
                width={200}
                height={200}
                className="w-32 h-32 object-cover mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
      </div>
    </section>
  );
}