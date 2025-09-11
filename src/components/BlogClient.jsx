"use client";
// components/BlogClient.jsx

import { useState } from "react";
import PostCard from "./PostCard";

export default function BlogClient({ posts, categories }) {
  const [activeCat, setActiveCat] = useState("all");

  const filteredPosts =
    activeCat === "all"
      ? posts
      : posts.filter((post) => post.categories.includes(Number(activeCat)));

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-4 mb-8">
        <button
          onClick={() => setActiveCat("all")}
          className={`px-4 py-2 rounded-md text-sm font-semibold ${
            activeCat === "all" ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCat(cat.id.toString())}
            className={`px-4 py-2 rounded-md text-sm font-semibold`}
            style={{
              backgroundColor:
                activeCat === cat.id.toString() ? cat.color : "#e5e7eb",
              color: activeCat === cat.id.toString() ? "white" : "black",
            }}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Post grid */}
      {filteredPosts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} categories={categories} />
          ))}
        </div>
      )}
    </section>
  );
}
