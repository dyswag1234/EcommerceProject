import React from "react";

import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Banner from "./Banner/Banner";
import Trending from "./Trending/trending";
import Product from "./Product/Product";
import Category from "./Category/Category";
import Footer from "./Footer/footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Banner />
      <Trending />
      <Footer />
    </>
  );
};
export default Home;
