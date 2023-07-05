import React, { useState } from "react";
import ProductCard from "./ProductCard/ProductCard";
import QuickViewModal from "./QuickViewModal/QuickViewModal";

const Collection = ({ products = [], isError = false, isLoading = true }) => {
  const [modalData, setModalData] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
      <div className="row justify-content-center">
        {!isError && products.length > 0 ? (
          products.map((product) => {
            return (
              <div
                key={product.id}
                className="col-sm-6 my-2 col-md-4 col-lg-3 "
              >
                <ProductCard
                  product={product}
                  showImageModal={showImageModal}
                />
              </div>
            );
          })
        ) : (
          <div>{!isLoading && "No Products"}</div>
        )}
      </div>
      <QuickViewModal
        product={modalData}
        showModal={showModal}
        closeModal={closeModal}
      />
    </>
  );
};

export default Collection;
