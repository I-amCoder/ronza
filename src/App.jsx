import React, { useEffect, useState } from "react";
import AppNav from "./Components/AppNav";
import FeaturedProducts from "./Components/FeaturedProducts";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import ProductCarousel from "./Components/ProductCarousel";
import SocialSection from "./Components/SocialSection";
import api from "./data.json";
import ContactUs from "./Components/ContactUs";
import "react-loading-skeleton/dist/skeleton.css";
import { config } from "./config";

const App = () => {
  const [images, setImages] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hero, setHero] = useState([]);
  const [sections, setSections] = useState([]);
  const apiUrl = config.url.API_URL;

  const loadHomePageData = () => {
    const url = `${apiUrl}/home-stuff`;
    fetch(url)
      .then((response) => response.json())
      .then((myJson) => {
        processApi(myJson.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const processApi = (apiData) => {
    setData(apiData);
    setHero(api.results);
    setSections(apiData.sections.filter((section) => section.type !== "hero"));
  };

  const loadImages = () => {
    setImages(api.results);
  };

  useEffect(() => {
    loadHomePageData();
    loadImages();
  }, []);
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
