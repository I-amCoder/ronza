import React from "react";
    
const FeaturedProducts = ({ images }) => {
  return (
    <section className="featured-products my-5">
      <h1 className="text-center my-4">Featured Products</h1>
      <div className="container">
        <div className="row  text-center justify-content-center">
          {images.slice(3, 6).map((image, index) => {
            return (
              <div key={index} className="col-md-4 mb-4">
                <div className="card shadow feature-product-card">
                  <img
                    className="card-img"
                    src={image.urls.small}
                    alt="Bologna"
                  />
                  <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                    <h1 className="card-title">
                      {image.description || "no description"}
                    </h1>
                    <h6 className="card-subtitle mb-2">
                      Emilia-Romagna Region, Italy
                    </h6>
                    <div className="text-center">
                      <a href="#" className="btn btn-warning buy-now-btn">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
