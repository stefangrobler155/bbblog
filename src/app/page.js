import Hero from "@/components/Hero";
import { fetchCategories, fetchSiteSettings } from "../lib/api";
import FeaturedCategories from "@/components/FeaturedCategories";

export default async function Home() {
  const categories = await fetchCategories();
  const settings = await fetchSiteSettings();
  console.log("Categories From Home Page.js", categories);
  return (
    <main className="">
      <Hero hero={settings.hero} />
      <FeaturedCategories categories={categories} />
    </main>
  );
}
