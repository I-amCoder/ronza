import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import apiService from "../Services/ProductService";
import Product from "./Product";

const ProductListing = () => {
  const [currentCategory, setCurrentCategory] = useState("All");
  const [Products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      await apiService.getCategories().then((data)=>{
        setCategories(data.data);
      });
    } catch (e) {
      console.log(e);
    }
  };
  

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="product-listing-page">
      <div className="category-label text-center mb-4">
        <h1>Browse Categories</h1>
      </div>
      <div className="category-tabs">
        <button
          className={currentCategory === "All" ? "active" : ""}
          onClick={() => setCurrentCategory("All")}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            className={currentCategory === category.id ? "active" : ""}
            onClick={() => setCurrentCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <Product category={currentCategory} />
    </div>
  );
};

export default ProductListing;
