import React, { useContext } from "react";

import { SiteContext } from "../Contexts/SiteContext";
import ProductCarousel from "../Components/ProductCarousel";
import FeaturedProducts from "../Components/FeaturedProducts";
import ContactUs from "../Components/ContactUs";
import SocialSection from "../Components/SocialSection";
import ProductListing from "../Components/ProductListing";

const Home = () => {
  const { images,data, loading } = useContext(SiteContext);
  // console.log(data.carousel);
  return (
    <>
      <ProductCarousel
        images={images}
        title={"Latest Products"}
      ></ProductCarousel>
      <ProductListing />
      <FeaturedProducts images={images} />
      <ProductCarousel
        images={images.slice(2, 7)}
        title={"Limited Sale"}
      ></ProductCarousel>
      <ContactUs />
      <SocialSection data={data} loading={loading} />
    </>
  );
};

export default Home;
