import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const ProductCarousel = ({ images, title }) => {
  return (
    <>
      <section className="carousel-section my-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              {/* <img className="logo-image shadow " src={image} alt="logo" />
              <p className="mt-2 fw-bold ">
                Slogun line Lorem, ipsum dolor. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Error, laboriosam.
              </p> */}
              <p className="my-4 carousel-title fw-bold underline">{title}</p>
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
                {images.map((image, index) => {
                  return (
                    <div key={index} className="card p-3  carousel-card m-3 ">
                      <img
                        className="card-img-top shadow"
                        src={image.urls.small}
                        alt={image.description || "helo image"}
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title mt-3">
                          {image.description || "Product Title"}
                        </h5>
                        <p className="fw-bold discounted-price">$20.00</p>
                        <p className="fw-bold">$10.00</p>
                      </div>
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
