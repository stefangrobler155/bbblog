import Link from "next/link";

export default function ShareButtons({ post }) {
  const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.slug}`;
  const shareTitle = post.title?.rendered || "Check out this post!";

  return (
    <div className="flex space-x-4 mt-6">
      <Link
        href={`https://x.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:underline"
      >
        Share on X
      </Link>
      <Link
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:underline"
      >
        Share on Facebook
      </Link>
      <Link
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:underline"
      >
        Share on LinkedIn
      </Link>
    </div>
  );
}