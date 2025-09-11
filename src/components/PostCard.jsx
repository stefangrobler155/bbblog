// components/PostCard.jsx
"use client";

export default function PostCard({ post, categories }) {
  const postCategories = categories.filter((c) =>
    post.categories.includes(c.id)
  );

  const image =
    post.featuredImage || "/images/fallback.jpg"; // ✅ fallback image

  return (
    <article className="rounded-xl overflow-hidden shadow-lg bg-[var(--accent)]">
      <a href={`/blog/${post.slug}`}>
        <img
          src={image}
          alt={post.title}
          className="w-full h-56 object-cover"
        />
      </a>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {postCategories.map((cat) => (
            <span
              key={cat.id}
              className="text-xs font-medium px-2 py-1 rounded"
              style={{ backgroundColor: cat.color, color: "white" }}
            >
              {cat.name}
            </span>
          ))}
        </div>

        <h2 className="text-xl font-bold mb-3">
          <a href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </a>
        </h2>

        <div
          className="text-[var(--light-text)] text-sm mb-4 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
        />

        <a
          href={`/blog/${post.slug}`}
          className="text-sm font-semibold text-brown-700 hover:underline"
        >
          Read More →
        </a>
      </div>
    </article>
  );
}
