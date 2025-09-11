// app/blog/[slug]/page.jsx
import { fetchPostBySlug } from "@/lib/api";
import BackButton from "@/components/BackButton";

export default async function SinglePostPage({ params }) {
  const { slug } =  await params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    return <div className="max-w-4xl mx-auto px-6 py-12">Post not found</div>;
  }

  return (
    <article className="max-w-4xl mx-auto px-6 py-12">
      {post.featuredImage && (
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-80 object-cover rounded-xl mb-8"
        />
      )}

      <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-8">
        {new Date(post.date).toLocaleDateString()}
      </p>

      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <BackButton />
    </article>
  );
}
