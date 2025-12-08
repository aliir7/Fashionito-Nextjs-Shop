import PopularProducts from "../Product/PopularProducts";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
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
    </>
  );
}

export default Index;
