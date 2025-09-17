import { fetchPostsByCategory, fetchCategoryBySlug, fetchCategories } from "@/lib/wordpress";
import PostGrid from "@/components/PostGrid";
import Pagination from "@/components/Pagination";
import CategoryFilter from "@/components/CategoryFilter";

export default async function CategoryPage({ params, searchParams }) {
  const { slug } = await params;
  const paramsResolved = await searchParams; // Await searchParams
  const page = Math.max(1, parseInt(paramsResolved.page || "1", 10)); // Ensure page >= 1
  const { posts, totalPages } = await fetchPostsByCategory(slug, { page, perPage: 9 });
  const category = await fetchCategoryBySlug(slug);
  const categories = await fetchCategories();

  if (!category) {
    return <p className="p-8 text-red-600">Category not found</p>;
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4" style={{ color: "var(--dark-text)" }}>
        {category.name}
      </h1>
      <CategoryFilter categories={categories} currentCategoryId={category.id} />
      <PostGrid posts={posts} />
      {posts.length === 0 && (
        <p className="mt-6 text-gray-600">
          No posts found in this category. Check out our{" "}
          <a href="/blog" className="text-accent hover:underline">
            Blog
          </a>{" "}
          for more content.
        </p>
      )}
      {totalPages > 1 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          basePath={`/categories/${slug}`}
        />
      )}
      </div>
    </main>
  );
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = await fetchCategoryBySlug(slug);

  return {
    title: category?.name ? `${category.name} | Your Blog Name` : "Category",
    description: `Explore posts in the ${category?.name || "category"} category.`,
  };
}