import Link from "next/link";
import Image from "next/image";

export default function ExploreByCategory({ categories }) {
    // console.log("ExploreByCategory", categories);
    
  return (
    <section className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold">
        Explore by Category
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 py-10">
        {categories.map((category) => (
          
            <div key={category.id} className="flex flex-col items-center text-center  bg-[var(--dark-bg)] rounded-lg p-4 shadow-md hover:shadow-lg transition">
              <div className="bg-[var(--secondary-accent)] p-4 rounded-lg shadow-md hover:shadow-lg transition w-fit h-fit flex flex-col items-center">
              <Image
                src={
                  category.acf?.bb_category_image || // Adjust based on your custom field
                  "/images/category-fallback.jpg"
                }
                alt={category.name}
                width={200}
                height={200}
                className="w-32 h-32 object-cover mb-4 rounded-full border-2 border-[var(--accent)]"
              />
              <Link
                href={`/categories/${category.slug}`}
                className="text-lg font-semibold bg-[var(--accent)] text-light-text px-4 py-2 rounded hover:bg-[var(--dark-bg)] transition"
              >
              {category.name}
              </Link>
              </div>
            </div>
          
        ))}
      </div>
      </div>
    </section>
  );
}