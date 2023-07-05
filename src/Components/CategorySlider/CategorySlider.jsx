import React, { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SiteContext } from "../../Contexts/SiteContext";
import { Link } from "react-router-dom";
import "./slider.css"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CategorySlider = ({ title }) => {
  const { loading, data } = useContext(SiteContext);

  return (
    <>
      <section className="carousel-section mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <p className="my-4 h1 fw-bold underline">{title}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Carousel
                autoPlay
                autoPlaySpeed={3000}
                // showDots
                removeArrowOnDeviceType={["tablet", "mobile"]}
                infinite
                responsive={responsive}
              >
                {!loading &&
                  data.categories.map((category, index) => {
                    return (
                      <div
                        key={index}
                        className="card p-3  carousel-card m-3 "
                      >
                        <Link to={`/collection/${category.slug}`} style={{ textDecoration: "none", color: "black" }}>
                          <img
                            className="card-img-top category-slider-img shadow bg-light"
                            src={category.logo_path}
                            alt={category.title || "helo image"}
                          />
                          <div className="card-body text-center">
                            <h5 className="card-title mt-3">
                              {category.name || "Category"}
                            </h5>
                            <p className="fw-bold">{category.title}</p>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategorySlider;
