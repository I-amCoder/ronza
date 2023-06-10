import React, { useState } from "react";

// Define your category data (dummy data for demonstration)
const categories = [
  { id: 1, name: "Category 1" },
  { id: 2, name: "Category 2" },
  { id: 3, name: "Category 3" },
  // Add more category data as needed
];

// Define your product data (dummy data for demonstration)
const products = [
  { id: 1, name: "Product 1", categoryId: 1 },
  { id: 2, name: "Product 2", categoryId: 2 },
  { id: 3, name: "Product 3", categoryId: 1 },
  { id: 4, name: "Product 4", categoryId: 3 },
  { id: 5, name: "Product 5", categoryId: 2 },
  // Add more product data as needed
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter products based on the selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.categoryId === selectedCategory);

  return (
    <div className="product-listing-page">
      <div className="category-tabs">
        <button
          className={selectedCategory === "All" ? "active" : ""}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            className={selectedCategory === category.id ? "active" : ""}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div className="product" key={product.id}>
            <h3>{product.name}</h3>
            <p>{getCategoryName(product.categoryId)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper function to get the name of a category based on its id
const getCategoryName = (categoryId) => {
  const category = categories.find((category) => category.id === categoryId);
  return category ? category.name : "";
};

export default Products;