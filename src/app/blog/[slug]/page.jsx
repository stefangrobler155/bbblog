import BackButton from "@/components/BackButton";
import ShareButtons from "@/components/ShareButtons";
import { fetchPostBySlug } from "@/lib/wordpress";
import { formatDate, calculateReadingTime } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    return <p className="p-8 text-red-600">Post not found</p>;
  }

  const primaryCategory = post._embedded?.["wp:term"]?.[0]?.[0] || {
    name: "Uncategorized",
    slug: "uncategorized",
  };

  return (
    <main className="container min-h-screen mx-auto px-4 py-8">
      <div className="max-w-7xl md:flex md:gap-8 mx-auto">
        {/* Featured Image */}
        <div className="md:w-1/3 mb-6 md:mb-0">
          <Image
            src={
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
              "/images/fallback.jpg"
            }
            alt={post.title?.rendered || "Post image"}
            width={300}
            height={225}
            className="w-full h-auto object-cover rounded"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-2/3">
          <Link
            href={`/categories/${primaryCategory.slug}`}
            className="text-sm text-accent hover:underline mb-2 inline-block"
          >
            {primaryCategory.name}
          </Link>
          <h1
            className="text-3xl font-bold mb-4"
            style={{ color: "var(--dark-text)" }}
            dangerouslySetInnerHTML={{ __html: post.title?.rendered || "Untitled Post" }}
          />
          <div className="text-sm text-gray-600 mb-4">
            <span>Published on {formatDate(post.date || new Date())}</span>
            {post._embedded?.author?.[0]?.name && (
              <span> | By {post._embedded.author[0].name}</span>
            )}
          </div>
          <p className="text-sm text-gray-600 mb-4">
            {calculateReadingTime(post.content?.rendered || "")} min read
          </p>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content?.rendered || "No content available." }}
          />
          <ShareButtons post={post} />
          <div className="mt-6">
            <BackButton />
          </div>
        </div>
      </div>
    </main>
  );
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  return {
    title: post?.title?.rendered || "Blog Post",
    description: post?.excerpt?.rendered?.replace(/<[^>]+>/g, "") || "Read this blog post on our site.",
  };
}