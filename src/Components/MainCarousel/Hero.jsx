import React, { useContext, useState } from "react";
import { SiteContext } from "../../Contexts/SiteContext";
import Carousel from "react-bootstrap/Carousel";
import "./hero.css";

const Hero = () => {
  const { data, loading } = useContext(SiteContext);
  const [currentActiveIndex, setCurrentActiveIndex] = useState(0);

  const handleNextSlide = (index) => {
    setCurrentActiveIndex(index);
  };

  return (
    <section className="hero">
      <div className="header">
        {!loading && (
          <Carousel
            className="custom-carousel"
            controls={false}
            fade
            onSlid={handleNextSlide}
            interval={"2000"}
          >
            {!loading &&
              data.carousels.map((item, index) => {
                const { subtitle, title, product } = item;
                const isActiveSlide = index === currentActiveIndex;

                return (
                  <Carousel.Item className="carousel-item bg-white" key={index}>
                    <img
                      className="d-block w-100 carousel-image bg-white"
                      src={product.nonBgImg}
                      alt="First slide"
                    />
                    <Carousel.Caption className={`carousel-caption ${isActiveSlide && "active"}`}>
                      <div className="row">
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className={`c-caption`}>
                            <p>{subtitle || "description"}</p>
                            <h3>{title || "title"}</h3>
                            <button className="btn btn-outline-dark">
                              Shop Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
          </Carousel>
        )}
      </div>
    </section>
  );
};

export default Hero;
