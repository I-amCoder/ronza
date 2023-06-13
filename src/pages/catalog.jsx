import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Search from "../Components/Search";
import apiService from "../Services/ProductService";
import ProductCard from "../Components/ProductCard";
import ImageModal from "../Components/ImageModal";
import Pagination from "../Components/Pagination";
import { prettyDOM } from "@testing-library/react";

const Catalog = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(false);
  const [meta, setMeta] = useState({});
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q");
  const queryRef = useRef(null);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      try {
        const response = await apiService.searchProducts(query, currentPage);
        setSearchResults((prev) => {
          if (currentPage === 1) {
            return response.data;
          }
          return [...prev, ...response.data];
        });
        setIsLoading(false);
        setMeta(response.meta);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
        console.log(error);
      }
    };
    if (queryRef.current !== query) {
      setCurrentPage(1);
      setSearchResults([]);
    }
    loadProducts();
    queryRef.current = query;
  }, [currentPage, query]);

  const handleLoadMore = () => {
    setCurrentPage((prev) => {
      return prev + 1;
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
    <div className="my-4">
      <div className="mt-5">
        <Search />
      </div>
      <section className="container catelog-section">
        <div className="row my-4">
          <div className="col-12 ">
            <h5>Search Results For: "{query}"</h5>
          </div>
        </div>
        <div className="row justify-content-center">
          {!isError && searchResults.length > 0 ? (
            searchResults.map((product) => {
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
            <div>
               {!isLoading &&
            "No Products"
            } 
                
            </div>
          )}
        </div>
        <Pagination
          currentPage={currentPage}
          handleLoadMore={handleLoadMore}
          meta={meta}
          loaded={!isLoading}
        />
      </section>
      <ImageModal
        data={modalData}
        showModal={showModal}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Catalog;
