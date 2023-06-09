import React from "react";

const SingleProduct = () => {
  return (
    <>
      <section className="product-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2 className="product-title">Product title Goes here</h2>
              <div className="product-subtitle mt-3 h4">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </div>
            </div>
          </div>
          <div className="row product-details justify-content-center align-items-center">
            <div className="col-lg-6 text-center">
              <img
                src="https://picsum.photos/id/223/400/500.jpg"
                alt="Feature Img"
                className="product-image"
              />
            </div>
            <div className="col-lg-6">
              <div className="row my-5 ">
                <div className="col-lg-2 img-col">
                  <img
                    className="product-img-sm  "
                    src="https://picsum.photos/id/237/200/300"
                    alt="Feature Img"
                  />
                </div>
                <div className="col-lg-6 product-feature-text ">
                  <h5>Helo feature</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt, commodi?
                  </p>
                </div>
              </div>
              <div className="row my-5">
                <div className="col-lg-2 img-col">
                  <img
                    className="product-img-sm"
                    src="https://picsum.photos/id/237/200/300"
                    alt="Feature Img"
                  />
                </div>
                <div className="col-lg-6  product-feature-text">
                  <h5>Helo feature</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt, commodi?
                  </p>
                </div>
              </div>
              <div className="row my-5">
                <div className="col-lg-2 img-col">
                  <img
                    className="product-img-sm"
                    src="https://picsum.photos/id/237/200/300"
                    alt="Feature Img"
                  />
                </div>
                <div className="col-lg-6  product-feature-text">
                  <h5>Helo feature</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt, commodi?
                  </p>
                </div>
              </div>
              <div className="row my-5">
                <div className="col-lg-2 img-col">
                  <img
                    className="product-img-sm"
                    src="https://picsum.photos/id/237/200/300"
                    alt="Feature Img"
                  />
                </div>
                <div className="col-lg-6  product-feature-text">
                  <h5>Helo feature</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt, commodi?
                  </p>
                </div>
              </div>
              <div className="row my-5">
                <div className="col-lg-2 img-col">
                  <img
                    className="product-img-sm"
                    src="https://picsum.photos/id/237/200/300"
                    alt="Feature Img"
                  />
                </div>
                <div className="col-lg-6  product-feature-text">
                  <h5>Helo feature</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt, commodi?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <button className="text-dark shadow btn hero-btn btn-lg mt-4">
              Check out
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
