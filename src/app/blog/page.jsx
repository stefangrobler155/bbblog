import { fetchPosts, fetchCategories } from "@/lib/wordpress";
import PostGrid from "@/components/PostGrid";
import Pagination from "@/components/Pagination";
import CategoryFilter from "@/components/CategoryFilter";

export default async function BlogPage({ searchParams }) {
  const paramsResolved = await searchParams; // Await searchParams
  const page = Math.max(1, parseInt(paramsResolved.page || "1", 10)); // Ensure page >= 1
  const { posts, totalPages } = await fetchPosts({ page, perPage: 9 });
  const categories = await fetchCategories();

  // Deduplicate posts by id
  const existingIds = new Set();
  const uniquePosts = posts.filter((post) => {
    if (existingIds.has(post.id)) return false;
    existingIds.add(post.id);
    return true;
  });

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4" style={{ color: "var(--dark-text)" }}>
        Blog
      </h1>
      <CategoryFilter categories={categories} currentCategoryId={null} />
      <PostGrid posts={uniquePosts} />
      {uniquePosts.length === 0 && (
        <p className="mt-6 text-gray-600">
          No posts found. Check out our{" "}
          <a href="/categories" className="text-accent hover:underline">
            Categories
          </a>{" "}
          for more content.
        </p>
      )}
      {totalPages > 1 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          basePath="/blog"
        />
      )}
      </div>
    </main>
  );
}

export async function generateMetadata() {
  return {
    title: "Blog | Your Blog Name",
    description: "Explore all posts on our blog, covering a variety of topics and insights.",
  };
}