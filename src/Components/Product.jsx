import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import apiService from "../Services/ProductService";
import ImageModal from "./ImageModal";

const Product = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [meta, setMeta] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [showModal, setShowModal] = useState(false);


  const getProducts = async () => {
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
  };

  useEffect(() => {
    getProducts();
  }, [category, currentPage]);

  const handleLoadMore = () => {
    setCurrentPage((page) => {
      return page + 1;
    });
  };

  const showImageModal = (src,title) => {
    setModalImageUrl(src);
    setModalTitle(title);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImageUrl("");
    setModalTitle("");
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          {products.map((product) => (
            <div key={product.id} className="col-sm-6 my-2 col-md-4 col-lg-3 ">
              <div className="product shadow">
                <div className="image-container">
                  <img src={product.imagePath} alt="" className="p-img " />
                  <div className="overlay">
                    <button
                      onClick={() => showImageModal(product.imagePath,product.title)}
                      className="view-btn"
                    >
                      <FaEye className="eye-icon" />
                    </button>
                  </div>
                </div>

                <div className="details">
                  <h5 className="">{product.title}</h5>
                  <div className="d-flex mt-3 flex-row justify-content-between">
                    <span>
                      <s>${product.price}</s>
                    </span>

                    <span className="price text-right">
                      ${product.discounted_price}
                    </span>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-auto text-center">
                      <button className="btn my-2 btn-grad">Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {loaded && (
          <>
            {currentPage < meta.last_page ? (
              <div className="row mt-4 justify-content-center">
                <div className="col-md-6 text-center">
                  <button onClick={handleLoadMore} className="btn btn-success">
                    Load More
                  </button>
                </div>
              </div>
            ) : (
              <div className="row mt-4">
                <div className="col-12 text-center">No More Data :(</div>
              </div>
            )}
          </>
        )}
      </div>
      <ImageModal
        imageUrl={modalImageUrl}
        showModal={showModal}
        closeModal={closeModal}
        title={modalTitle}
      />
    </>
  );
};

export default Product;
