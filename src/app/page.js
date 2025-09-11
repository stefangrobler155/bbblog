import Hero from "@/components/Hero";
import { fetchCategories, fetchSiteSettings, fetchFeaturedPosts } from "../lib/api";
import FeaturedCategories from "@/components/FeaturedCategories";
import FeaturedPosts from "@/components/FeaturedPosts";

export default async function Home() {
  const categories = await fetchCategories();
  const settings = await fetchSiteSettings();
  const posts = await fetchFeaturedPosts(3);

  return (
    <main className="">
      <Hero hero={settings.hero} />
      <FeaturedPosts posts={posts} />
      <FeaturedCategories categories={categories} />
    </main>
  );
}
