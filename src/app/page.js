import { fetchPosts, fetchCategories } from "../lib/api";

export default async function Home() {
  const posts = await fetchPosts();
  const categories = await fetchCategories();
  return (
    <main className="max-w-4xl mx-auto p-6">
          <section className="my-12">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <span
            key={cat.id}
            className="px-4 py-2 rounded-full text-white text-sm font-medium"
            style={{ backgroundColor: cat.color }}
          >
            {cat.name}
          </span>
        ))}
      </div>
    </section>
      {posts.map((post) => (
        <article key={post.id} className="mb-10 border-b pb-6">
          {post.featuredImage && (
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
          )}
          <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
          {post.readingTime && (
            <span className="text-sm text-gray-500">
              {post.readingTime} min read
            </span>
          )}
          <div
            className="text-gray-700 mt-3"
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          />
          {post.authorBio && (
            <p className="mt-3 text-sm italic text-gray-600">{post.authorBio}</p>
          )}
        </article>
      ))}
    </main>
  );
}
