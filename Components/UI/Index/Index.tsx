import PopularProducts from "../Product/PopularProducts";
// import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Companies from "./Companies/Companies";
import Hero from "./Hero/Hero";
import Trending from "./Trending/Trending";

function Index() {
  return (
    <>
      <Hero />
      <Category />
      <Trending />
      {/* <Banner /> */}
      <PopularProducts />
      <Companies />
    </>
  );
}

export default Index;
