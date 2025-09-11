// components/FeaturedPosts.jsx
import Link from "next/link";

export default function FeaturedPosts({ posts }) {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Posts</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => {
            const featuredImg =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
              "/images/fallback.jpg"; 

            return (
              <article
                key={post.id}
                className="rounded-lg shadow hover:shadow-lg overflow-hidden transition bg-[var(--accent)]"
              >
                <Link href={`/blog/${post.slug}`}>
                  <img
                    src={featuredImg}
                    alt={post.title.rendered}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3
                      className="text-xl font-semibold mb-2"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    <p className="text-[var(--text-light)] text-sm">
                      {post.date
                        ? new Date(post.date).toLocaleDateString()
                        : ""}
                    </p>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
