// src/lib/api.jsx
// export async function getAllPosts(limit = 50) {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_WP_API_URL}/wp-json/wp/v2/posts?per_page=${limit}&_embed`, {
//       next: { revalidate: 60 }
//     });
//     if (!res.ok) throw new Error('Failed to fetch');
//     const posts = await res.json();
//     return posts 
// }

// export async function getPostCategory() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_WP_API_URL}/wp-json/wp/v2/categories`, {
//     next: { revalidate: 60 }
//   });
//   if (!res.ok) throw new Error('Failed to fetch');
//   const categories = await res.json();
  
//   return categories
// }