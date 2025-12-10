import BlogSection from "../Blogs/BlogSection";
import PopularProducts from "../Product/PopularProducts";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Companies from "./Companies/Companies";
import Follow from "./Follow/Follow";
import Hero from "./Hero/Hero";
import Trending from "./Trending/Trending";

function Index() {
  return (
    <>
      <Hero />
      <Category />
      <Trending />
      <Banner />
      <PopularProducts />
      <Companies />
      <BlogSection />
      <Follow />
    </>
  );
}

export default Index;
