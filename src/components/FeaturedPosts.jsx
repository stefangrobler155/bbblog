import PostGrid from "./PostGrid";

export default function FeaturedPosts({ posts }) {
  return (
    <section className="p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6" style={{ color: "var(--dark-text)" }}>
        Featured Posts
        </h2>
        <PostGrid posts={posts} />
      </div>
      
    </section>
  );
}