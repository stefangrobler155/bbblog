import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

export default function PostGrid({ posts }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {posts.length > 0 ? (
        posts.map((post) => {
          const primaryCategory = post._embedded?.["wp:term"]?.[0]?.[0] || {
            name: "Uncategorized",
            slug: "uncategorized",
          };

          return (
            <article key={post.id} className="card p-4 rounded shadow hover:shadow-lg transition">
              <Link href={`/blog/${post.slug}`}>
                <Image
                  src={
                    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                    "/images/fallback.jpg"
                  }
                  alt={post.title?.rendered || "Post image"}
                  width={400}
                  height={300}
                  className="w-full h-60 object-cover mb-4 rounded"
                />
              </Link>
              <div className="flex flex-col">
                <Link
                  href={`/categories/${primaryCategory.slug}`}
                  className="text-sm text-accent hover:underline mb-2"
                >
                  {primaryCategory.name}
                </Link>
                <h2
                  className="text-xl font-semibold mb-2 hover:text-accent transition"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <span dangerouslySetInnerHTML={{ __html: post.title?.rendered || "Untitled Post" }} />
                  </Link>
                </h2>
                <p className="text-sm text-gray-600 mb-2">
                  {formatDate(post.date || new Date())}
                </p>
                <div
                  className="text-sm text-gray-600 mb-4 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered || "No excerpt available." }}
                />
                <Link
                  href={`/blog/${post.slug}`}
                  className="w-fit px-4 py-2 bg-accent text-light-text rounded hover:bg-opacity-90 transition"
                >
                  Read More
                </Link>
              </div>
            </article>
          );
        })
      ) : (
        <p className="mt-6 text-gray-600">No posts found.</p>
      )}
    </div>
  );
}