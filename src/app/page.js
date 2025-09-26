import { fetchFeaturedPosts, fetchCategories, fetchLandingPageData } from "@/lib/wordpress";
import FeaturedPosts from "@/components/FeaturedPosts";
import ExploreByCategory from "@/components/ExploreByCategory";
import PopularPosts from "@/components/PopularPosts";
import NewsLetterSignup from "@/components/NewsLetterSignup";
import RecentPosts from "@/components/RecentPosts";
import Hero from "@/components/Hero";


export default async function HomePage({ searchParams }) {
  const featuredPosts = await fetchFeaturedPosts("featured-post"); // Replace with your tag slug or ID
  const categories = await fetchCategories();
  const landingPageData = await fetchLandingPageData();
  // console.log("Landing Page Data:", landingPageData);

  return (
    <main>
      <Hero data={landingPageData} />

      {/* Featured Posts Section */}
      <FeaturedPosts posts={featuredPosts} />

      {/* Explore by Category Section */}
      <ExploreByCategory categories={categories} />

      {/* Popular Posts Section */}
      <PopularPosts />

      {/* Newsletter Signup Section */}
      <NewsLetterSignup />

      {/* Recent Posts Section */}
      <RecentPosts searchParams={searchParams} />
    </main>
  );
}

export async function generateMetadata() {
  return {
    title: "Home | Brew & Beyond",
    description: "Welcome to our blog, featuring the latest posts and insights.",
  };
}