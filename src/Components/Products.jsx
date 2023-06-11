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
  { id: 5, name: "Product 5", categoryId: 3 },
  { id: 6, name: "Product 6", categoryId: 3 },
  { id: 7, name: "Product 7", categoryId: 3 },
  { id: 8, name: "Product 8", categoryId: 3 },
  { id: 9, name: "Product 9", categoryId: 3 },
  { id: 10, name: "Product 10", categoryId: 3 },
  { id: 11, name: "Product 11", categoryId: 3 },
  { id: 12, name: "Product 12", categoryId: 2 },
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
      <div className="container row">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="col-sm-6 my-2 col-md-4 col-lg-3 col-xl-2"
          >
            <div className="product">
              <div className="image-container">
                <img
                  src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODQ0Mzl8MHwxfHNlYXJjaHwyfHxwcm9kdWN0c3xlbnwwfHx8fDE2Njk3MzUzMTQ&ixlib=rb-4.0.3&q=80&w=400"
                  alt=""
                  className="p-img"
                />
              </div>
              
              <div className="details">
                <h5 className="">{product.name}</h5>
                <p className="mt-3">{getCategoryName(product.categoryId)}</p>
              </div>
            </div>
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
