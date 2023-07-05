import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Search from "../Components/Search/Search";
import apiService from "../Services/ProductService";
import Pagination from "../Components/Pagination";
import Collection from "../Components/Collection";

const Catalog = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q");
  const queryRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [meta, setMeta] = useState({});
  const [isError, setIsError] = useState(false);

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

  return (
    <div className="my-4">
      <div className="mt-5">
        <Search
          bg={"white"}
          title={`Found ${searchResults.length} results for "${query}"`}
        />
      </div>
      <section className="container catelog-section">
        <div className="row my-4">
          <div className="col-12 ">
            <h5>Search Results For: "{query}"</h5>
          </div>
        </div>
        <div className="container">
          <Collection
            isError={isError}
            isLoading={isLoading}
            products={searchResults}
          />
        </div>

        <Pagination
          currentPage={currentPage}
          handleLoadMore={handleLoadMore}
          meta={meta}
          loaded={!isLoading}
        />
      </section>
    </div>
  );
};

export default Catalog;
