import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiService from "../Services/ProductService";
import Search from "../Components/Search/Search";
import BreadCrumb from "../Components/BreadCrumb/BreadCrumb";
import ProductPreview from "../Components/ProductPreview/ProductPreview";

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
    <>
      <BreadCrumb
        links={
          !isLoading
            ? [
                { title: "Home", path: "/" },
                {
                  title: product.category.name,
                  path: `/collection/${product.category.slug}`,
                },
                { title: product.title },
              ]
            : []
        }
        title={!isLoading && product.title}
      />
      <section className="product-section">
        <div className="container">
          {!isLoading && !error && (
            <ProductPreview product={product} />
          )}
        </div>
        <Search bg={"white"} />
      </section>
    </>
  );
};

export default ShowProduct;
