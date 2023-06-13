import React, { useCallback, useEffect, useRef, useState } from "react";
import apiService from "../Services/ProductService";
import ImageModal from "./ImageModal";
import Pagination from "./Pagination";
import ProductCard from "./ProductCard";

const Product = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [meta, setMeta] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [modalData, setModalData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const prevCatRef = useRef(null);

  const loadProducts =useCallback( async () => {
    setLoaded(false);
    try {
      const res = await apiService.getProducts(category, currentPage);
      setProducts((prev) => {
        if (currentPage === 1) {
          return res.data;
        }
        return [...prev, ...res.data];
      });
      setMeta(res.meta);
      setLoaded(true);
    } catch (error) {
      setLoaded(false);
      console.log(error); 
    }
  },[category,currentPage]);

  useEffect(() => {
    // Check if new Category is selected other go with current pagination
    if (prevCatRef.current !== category) {
      setCurrentPage(1);
      setProducts([]);
    }
    loadProducts();
    prevCatRef.current = category;
  }, [category, currentPage,loadProducts]);

  const handleLoadMore = () => {
    setCurrentPage((page) => {
      return page + 1;
    });
  };

  const showImageModal = (product) => {
    setModalData(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalData({});
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          {products.map((product) => (
            <div key={product.id} className="col-sm-6 my-2 col-md-4 col-lg-3 ">
             <ProductCard showImageModal={showImageModal} product={product} />
            </div>
          ))}
        </div>
        <Pagination loaded={loaded} currentPage={currentPage} handleLoadMore={handleLoadMore} meta={meta}  />
      </div>
      <ImageModal
        showModal={showModal}
        closeModal={closeModal}
        data={modalData}
      />
    </>
  );
};

export default Product;
