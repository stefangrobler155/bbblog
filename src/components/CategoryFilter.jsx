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
              : "bg-dark-bg text-light-text hover:bg-[var(--light-bg)] hover:text-[var(--dark-text)] transition"
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
                : "bg-dark-bg text-light-text hover:bg-[var(--light-bg)] hover:text-[var(--dark-text)]"
            }`}
          >
            {cat.name}
          </button>
        </Link>
      ))}
    </div>
  );
}