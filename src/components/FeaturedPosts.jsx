import PostGrid from "./PostGrid";

export default function FeaturedPosts({ posts }) {
  return (
    <section className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold">
        Featured Posts
        </h2>
        <PostGrid posts={posts} />
      </div>
      
    </section>
  );
}