import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiService from "../Services/ProductService";
import Search from "../Components/Search";

const ShowProduct = () => {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response = await apiService.showProduct(slug);
        setProduct(response.data);
        setIsLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
        console.log(error);
      }
    };
    loadProduct();
  }, [slug]);

  return (
    <section className="product-section">
        
      <div className="container py-4">
        <div className="row">
          {!isLoading && !error && (
            <>
              <div className="col-md-6 img-section">
                <div className="product-detail-img-container">
                  <img
                    className="product-detail-img"
                    src={product.imagePath}
                    alt={product.title}
                  />
                </div>
              </div>
              <div className="col-md-6 details-section">
                <span className="product-title">{product.title}</span>
                <span className="product-subtitle">
                  {product.small_description}
                </span>
                <hr />
                <span className="product-price">${product.price}</span>
                <span className="product-discount">
                  ${product.discounted_price}
                </span>

                <hr />
                <div className="product-description">
                  <div
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Search />
    </section>
  );
};

export default ShowProduct;
