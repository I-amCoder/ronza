import React, { useContext } from "react";

import { SiteContext } from "../Contexts/SiteContext";
import ProductCarousel from "../Components/ProductCarousel";
import FeaturedProducts from "../Components/FeaturedProducts";
import SocialSection from "../Components/SocialSection";
import ProductListing from "../Components/ProductListing";
import Search from "../Components/Search/Search";
import Hero from "../Components/MainCarousel/Hero";
import CategorySlider from "../Components/CategorySlider/CategorySlider";

const Home = () => {
  const { images,data, loading } = useContext(SiteContext);
  // console.log(data.carousel);
  return (
    <>
    <Hero />
        <Search />
      <CategorySlider title={"Browse Categories"} />
      <ProductListing />
      <FeaturedProducts images={images} />
      <ProductCarousel
        images={images.slice(2, 7)}
        title={"Limited Sale"}
      ></ProductCarousel>
      <SocialSection data={data} loading={loading} />
    </>
  );
};

export default Home;
