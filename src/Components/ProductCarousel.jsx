import React, { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SiteContext } from "../Contexts/SiteContext";
import { Link } from "react-router-dom";

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

const ProductCarousel = ({ title }) => {
  const { loading, data } = useContext(SiteContext);

  return (
    <>
      <section className="carousel-section mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              {/* <img className="logo-image shadow " src={image} alt="logo" />
              <p className="mt-2 fw-bold ">
                Slogun line Lorem, ipsum dolor. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Error, laboriosam.
              </p> */}
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
                  data.newArrivals.map((product, index) => {
                    return (
                      <div
                        key={index}
                        className="card p-3   carousel-card m-3 "
                      >
                        <Link
                          to={`/product/${product.slug}`}
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <img
                            className="card-img-top shadow bg-light"
                            src={product.nonBgImg}
                            alt={product.title || "helo image"}
                          />
                          <div className="card-body text-center">
                            <h5 className="card-title mt-3">
                              {product.title || "Product Title"}
                            </h5>
                            <p className="fw-bold discounted-price">
                              ${product.price}
                            </p>
                            <p className="fw-bold">
                              ${product.discounted_price}
                            </p>
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

export default ProductCarousel;
