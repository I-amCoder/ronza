import React, { useEffect, useState } from "react";
import AppNav from "./Components/AppNav";
import FeaturedProducts from "./Components/FeaturedProducts";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import ProductCarousel from "./Components/ProductCarousel";
import SocialSection from "./Components/SocialSection";
import api from "./assets/data.json";
import ContactUs from "./Components/ContactUs";
import "react-loading-skeleton/dist/skeleton.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hero, setHero] = useState([]);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    return () => {
      loadImages();
      loadHomePageData();
    };
  }, []);

  const loadHomePageData = () => {
    const url = "http://127.0.0.1:8000/api/home-stuff";
    fetch(url)
      .then((response) => response.json())
      .then((myJson) => {
        processApi(myJson.data);
        setLoading(false);
      });
  };
  const processApi = (apiData) => {
    setData(apiData);
    setHero(apiData.hero);
    setSections(apiData.sections.filter((section) => section.type !== "hero"));
  };

  const loadImages = () => {
    setImages(api.results);
  };
  return (
    <>
      <div className="header">
        <AppNav data={data} loading={loading}></AppNav>
        {!loading && <Hero hero={hero} />}
      </div>
      <ProductCarousel
        images={images}
        title={"Latest Products"}
      ></ProductCarousel>
      {!loading &&
        sections.map((section) => {
          return (
            <>
              {section.type === "slider" && <ProductCarousel images={images} />}
              {section.type === "featured" && (
                <FeaturedProducts images={images} />
              )}
            </>
          );
        })}
      <FeaturedProducts images={images} />
      <ProductCarousel
        images={images.slice(2, 7)}
        title={"Limited Sale"}
      ></ProductCarousel>
      <ContactUs />
      <SocialSection data={data} loading={loading} />
      <Footer />
    </>
  );
};

export default App;
