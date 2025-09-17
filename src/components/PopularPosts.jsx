// src/components/PopularPosts.jsx
import { fetchPopularPosts } from "@/lib/wordpress";
import PostGrid from "./PostGrid";

export default async function PopularPosts() {
  const posts = await fetchPopularPosts();

  return (
    <section className="p-8 bg-white">
      <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6" style={{ color: "var(--dark-text)" }}>
        Popular Posts
      </h2>
      <PostGrid posts={posts} />
      </div>
    </section>
  );
}