// src/components/PopularPosts.jsx
import { fetchPopularPosts } from "@/lib/wordpress";
import PostGrid from "./PostGrid";

export default async function PopularPosts() {
  const posts = await fetchPopularPosts();

  return (
    <section className="bg-secondary-accent py-10 px-4">
      <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold" style={{ color: "var(--dark-text)" }}>
        Popular Posts
      </h2>
      <PostGrid posts={posts} />
      </div>
    </section>
  );
}