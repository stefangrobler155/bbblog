// app/category/[slug]/page.js
import { fetchPostsByCategory } from "@/lib/api";

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const posts = await fetchPostsByCategory(slug);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 capitalize">{slug}</h1>
      {posts.length === 0 ? (
        <p>No posts found in this category.</p>
      ) : (
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.id}>
              <a href={`/blog/${post.slug}`} className="text-xl font-semibold">
                {post.title.rendered}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
