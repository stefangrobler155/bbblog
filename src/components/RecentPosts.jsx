"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { fetchPosts } from "@/lib/wordpress";
import PostGrid from "./PostGrid";

export default function RecentPosts({ initialPosts = [], initialTotalPages = 1 }) {
  const searchParams = useSearchParams();
  const initialPage = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
  const [posts, setPosts] = useState(initialPosts);
  const [page, setPage] = useState(initialPage + 1); // Start at next page
  const [totalPages, setTotalPages] = useState(initialTotalPages);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPosts() {
      if (page === initialPage + 1 && posts.length > 0) return; // Skip if initial posts loaded
      setLoading(true);
      try {
        const { posts: newPosts, totalPages: newTotalPages } = await fetchPosts({
          page,
          perPage: 6,
        });
        setPosts((prevPosts) => {
          const existingIds = new Set(prevPosts.map((post) => post.id));
          const uniqueNewPosts = newPosts.filter((post) => !existingIds.has(post.id));
          console.log(
            `Appending ${uniqueNewPosts.length} unique posts for page ${page}, Total Posts: ${
              prevPosts.length + uniqueNewPosts.length
            }`
          );
          return [...prevPosts, ...uniqueNewPosts];
        });
        setTotalPages(newTotalPages);
      } catch (err) {
        setError(err.message || "Failed to load posts");
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, [page]);

  return (
    <section className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold" style={{ color: "var(--dark-text)" }}>
        Recent Posts
      </h2>
      <PostGrid posts={posts} />
      {error && (
        <p className="mt-6 text-red-600">
          {error}. Please try again or check out our{" "}
          <a href="/blog" className="text-accent hover:underline">
            Blog
          </a>.
        </p>
      )}
      {posts.length === 0 && !error && !loading && (
        <p className="mt-6 text-gray-600">
          No recent posts available. Check out our{" "}
          <a href="/blog" className="text-accent hover:underline">
            Blog
          </a>{" "}
          for more content.
        </p>
      )}
      {posts.length > 0 && page < totalPages && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={loading}
            className={`px-6 py-2 bg-accent text-light-text rounded hover:bg-opacity-90 transition ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
      </div>
    </section>
  );
}