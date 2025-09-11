// lib/api.js
//FETCHING CATEGORIES
export async function fetchCategories() {
  const res = await fetch(
    "http://bbblog.local/wp-json/wp/v2/categories?per_page=100&_fields=id,name,slug,link,acf",
    { next: { revalidate: 60 } }
  );

  if (!res.ok) throw new Error("Failed to fetch categories");

  const cats = await res.json();

  return cats
    .filter((cat) => cat.slug !== "uncategorized")
    .map((cat) => ({
      id: cat.id,
      name: cat.name,
      slug: cat.slug,
      // Instead of WP full URL, make it relative for Next.js
      link: `/category/${cat.slug}`,
      image: cat.acf?.bb_category_image || null,
      color: cat.acf?.bb_category_color || "#ccc",
    }));
}

export async function fetchPostsByCategory(slug) {
  // get category by slug first
  const catRes = await fetch(
    `http://bbblog.local/wp-json/wp/v2/categories?slug=${slug}`
  );
  const cat = await catRes.json();
  if (!cat[0]) return [];

  const res = await fetch(
    `http://bbblog.local/wp-json/wp/v2/posts?categories=${cat[0].id}&_fields=id,slug,title,excerpt`
  );
  if (!res.ok) return [];

  return res.json();
}


//  Fietching SITE SETTINGS
export async function fetchSiteSettings() {
  const res = await fetch(
    "http://bbblog.local/wp-json/wp/v2/pages?slug=site-settings&_fields=acf",
    { next: { revalidate: 60 } } // cache for 1 minute
  );

  if (!res.ok) throw new Error("Failed to fetch site settings");

  const pages = await res.json();
  const acf = pages[0]?.acf || {};

  return {
    tagline: acf.bb_site_tagline || "",
    logo: acf.bb_logo || null,
    hero: {
      image: acf.hero?.bb_hero_image || null,
      title: acf.hero?.bb_hero_title || "",
      subtitle: acf.hero?.bb_hero_subtitle || "",
      cta: {
        label: acf.hero?.bb_hero_cta?.title || "Read More",
        url: acf.hero?.bb_hero_cta?.url || "#",
        target: acf.hero?.bb_hero_cta?.target || "_self",
      },
    },
    social: {
      youtube: acf.bb_social?.youtube_url || "",
      instagram: acf.bb_social?.instagram_url || "",
      facebook: acf.bb_social?.facebook_url || "",
    },
    cta: {
      label: acf.bb_cta_label || null,
      url: acf.bb_cta_url || null,
    },
  };
}



//FETCHING POSTS
export async function fetchFeaturedPosts(limit = 3) {
  const res = await fetch(
    `${process.env.WORDPRESS_API_URL}/wp-json/wp/v2/posts?_embed&per_page=${limit}`,
    { next: { revalidate: 60 } } // revalidate every 60s
  );

  if (!res.ok) throw new Error("Failed to fetch featured posts");

  return res.json();
}
export async function fetchPosts() {
  try {
    const res = await fetch(
      `http://bbblog.local/wp-json/wp/v2/posts?_embed&per_page=6`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const posts = await res.json();

    // normalize
    return posts.map((post) => ({
      id: post.id,
      title: post.title.rendered,
      slug: post.slug,
      excerpt: post.excerpt.rendered,
      content: post.content.rendered,
      date: post.date,
      categories: post.categories,
      featuredImage:
        post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
      readingTime: post.acf?.bb_reading_time || null,
      featured: post.acf?.bb_featured || false,
      authorBio: post.acf?.bb_author_bio || null,
    }));
  } catch (err) {
    console.error('Error fetching WordPress posts:', err);
    return [];
  }
}
// Fetch all posts (with categories + featured image)
export async function fetchAllPosts() {
  const res = await fetch(
    "http://bbblog.local/wp-json/wp/v2/posts?_embed&per_page=100"
  );
  if (!res.ok) throw new Error("Failed to fetch posts");

  const posts = await res.json();

  return posts.map((post) => ({
    id: post.id,
    title: post.title.rendered,
    slug: post.slug,
    excerpt: post.excerpt.rendered,
    date: post.date,
    categories: post.categories, // array of category IDs
    featuredImage:
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
  }));
}

export async function fetchPostBySlug(slug) {
  const res = await fetch(
    `http://bbblog.local/wp-json/wp/v2/posts?slug=${slug}&_embed`
  );
  if (!res.ok) return null;

  const posts = await res.json();
  if (!posts[0]) return null;

  const post = posts[0];
  return {
    id: post.id,
    title: post.title.rendered,
    slug: post.slug,
    date: post.date,
    content: post.content.rendered,
    featuredImage:
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
  };
}
