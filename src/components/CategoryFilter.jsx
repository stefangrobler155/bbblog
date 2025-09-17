// src/components/CategoryFilter.jsx
import Link from "next/link";

export default function CategoryFilter({ categories, currentCategoryId = null }) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <Link href="/blog">
        <button
          className={`px-4 py-2 rounded-full font-semibold transition ${
            !currentCategoryId
              ? "bg-accent text-light-text shadow"
              : "bg-gray-200 text-dark-text hover:bg-accent hover:text-light-text"
          }`}
        >
          All
        </button>
      </Link>
      {categories.map((cat) => (
        <Link key={cat.id} href={`/categories/${cat.slug}`}>
          <button
            className={`px-4 py-2 rounded-full font-semibold transition ${
              cat.id === currentCategoryId
                ? "bg-accent text-light-text shadow"
                : "bg-gray-200 text-dark-text hover:bg-accent hover:text-light-text"
            }`}
          >
            {cat.name}
          </button>
        </Link>
      ))}
    </div>
  );
}