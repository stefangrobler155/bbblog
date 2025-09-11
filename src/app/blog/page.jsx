// app/blog/page.jsx
import { fetchAllPosts, fetchCategories } from "@/lib/api";
import BlogClient from "@/components/BlogClient";

export default async function BlogPage() {
  const posts = await fetchAllPosts();
  const categories = await fetchCategories();

  return (
    <BlogClient posts={posts} categories={categories} />
  );
}
