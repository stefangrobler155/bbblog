export async function fetchCategories() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_API_URL}/wp-json/wp/v2/categories?exclude=1&per_page=100`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  return res.json();
}

export async function fetchCategoryBySlug(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_API_URL}/wp-json/wp/v2/categories?slug=${slug}`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  return data?.[0];
}

export async function fetchPosts({ page = 1, perPage = 9, categoryId = null } = {}) {
  const url = categoryId
    ? `${process.env.NEXT_PUBLIC_WP_API_URL}/wp-json/wp/v2/posts?categories=${categoryId}&per_page=${perPage}&page=${page}&_embed&status=publish`
    : `${process.env.NEXT_PUBLIC_WP_API_URL}/wp-json/wp/v2/posts?per_page=${perPage}&page=${page}&_embed&status=publish`;
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) {
    console.error(`Failed to fetch posts: ${res.status} ${res.statusText}, URL: ${url}`);
    throw new Error(`Failed to fetch posts: ${res.statusText}`);
  }
  const posts = await res.json();
  const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10);
  
  return { posts, totalPages };
}

export async function fetchPostsByCategory(slug, { page = 1, perPage = 9 } = {}) {
  const category = await fetchCategoryBySlug(slug);
  if (!category) {
    throw new Error(`Category with slug ${slug} not found`);
  }
  return fetchPosts({ page, perPage, categoryId: category.id });
}

export async function fetchTagBySlug(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_API_URL}/wp-json/wp/v2/tags?slug=${slug}`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  return data?.[0]; // Return the first matching tag
}

export async function fetchFeaturedPosts(tagIdOrSlug = "featured-post") {
  let tagId = tagIdOrSlug;
  // If a slug is provided, resolve the tag ID
  if (typeof tagIdOrSlug === "string") {
    const tag = await fetchTagBySlug(tagIdOrSlug);
    if (!tag) {
      throw new Error("Featured Post tag not found");
    }
    tagId = tag.id;
  }
  const url = `${process.env.NEXT_PUBLIC_WP_API_URL}/wp-json/wp/v2/posts?tags=${tagId}&per_page=3&_embed`;
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) {
    throw new Error("Failed to fetch featured posts");
  }
const posts = await res.json();
//   console.log("Raw posts:", posts); // Debug the raw API response
  return posts.filter(
    (post) =>
      post?.title?.rendered &&
      post?.excerpt?.rendered &&
      post?.slug
  ).slice(0, 3)
}


export async function fetchPopularPosts() {
  const url = `${process.env.NEXT_PUBLIC_WP_API_URL}/wp-json/wp/v2/posts?per_page=6&_embed&order_by=popularity`; // Requires plugin
  const res = await fetch(url, { next: { revalidate: 60 } });
  // console.log("Fetching popular posts from:", url);
  
  if (!res.ok) {
    throw new Error("Failed to fetch popular posts");
  }
  return res.json();
}


export async function fetchPostBySlug(slug) {
  const url = `${process.env.NEXT_PUBLIC_WP_API_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed`;
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) {
    throw new Error(`Failed to fetch post with slug ${slug}`);
  }
  const posts = await res.json();
  return posts?.[0] || null;
}

export async function fetchLandingPageData() {
  const url = `${process.env.NEXT_PUBLIC_WP_API_URL}/wp-json/wp/v2/pages/132`; 
  const res = await fetch(url, { next: { revalidate: 60 } });
    
  if (!res.ok) {
    throw new Error("Failed to fetch popular posts");
  }
  return res.json();
}