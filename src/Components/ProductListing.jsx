import React, { useContext, useEffect, useState } from "react";
import apiService from "../Services/ProductService";
import Product from "./Product";
import { SiteContext } from "../Contexts/SiteContext";

const ProductListing = () => {
  const [currentCategory, setCurrentCategory] = useState("All");
  const { loading, data = { categories: [] } } = useContext(SiteContext);

  // const fetchCategories = async () => {
  //   try {
  //     const data = await apiService.getCategories();
  //     setCategories(data.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <div className="product-listing-page">
      <div className="category-label text-center mb-4">
        <h1>Browse Categories</h1>
      </div>
      <div className="container">
        <div className="category-container">
          <div className="category-tabs">
            <div className="tab-item">
              <button
                className={`shadow ${
                  currentCategory === "All" ? "active" : ""
                }`}
                onClick={() => setCurrentCategory("All")}
              >
                All
              </button>
            </div>
            {data.categories.map((category) => (
              <div key={category.id} className="tab-item">
                <button
                  key={category.id}
                  className={`shadow ${
                    currentCategory === category.id ? "active" : ""
                  }`}
                  onClick={() => setCurrentCategory(category.id)}
                >
                  {category.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Product category={currentCategory} />
    </div>
  );
};

export default ProductListing;
