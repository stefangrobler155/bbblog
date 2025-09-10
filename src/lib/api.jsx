// lib/api.js
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


export async function fetchCategories() {
  try {
    const res = await fetch(
      `http://bbblog.local/wp-json/wp/v2/categories?per_page=100`,
      { headers: { "Content-Type": "application/json" }, next: { revalidate: 60 } }
    );

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const categories = await res.json();

    // filter out Uncategorized (id=1 is default in WP)
    return categories
      .filter((cat) => cat.id !== 1)
      .map((cat) => ({
        id: cat.id,
        name: cat.name,
        slug: cat.slug,
        count: cat.count,
        color: cat.acf?.bb_category_color || "#ccc",
        image: cat.acf?.bb_category_image?.url || null,
        description: cat.acf?.bb_category_long_desc || null,
      }));
  } catch (err) {
    console.error("Error fetching categories:", err);
    return [];
  }
}
