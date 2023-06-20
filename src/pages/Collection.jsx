import React, { useEffect, useState } from "react";
import BreadCrumb from "../Components/BreadCrumb/BreadCrumb";
import { useParams } from "react-router-dom";
import apiService from "../Services/ProductService";
import PCollection from "../Components/Collection";
import Pagination from "../Components/Pagination";
import { Container } from "react-bootstrap";

const Collection = () => {
  const { slug } = useParams();
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [meta, setMeta] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const categoryResponse = await apiService.getCategory(slug);
        const categoryId = categoryResponse.data.id;

        const productsResponse = await apiService.getProducts(categoryId);

        setCategory(categoryResponse.data);
        setProducts(productsResponse.data);
        setMeta(productsResponse.meta);
        setIsLoading(false);
        setIsError(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    };

    loadData();
  }, [slug]);

  const handleLoadMore = async () => {
    try {
      const nextPage = currentPage + 1;
      const productsResponse = await apiService.getProducts(
        category.id,
        nextPage
      );

      setProducts((prevProducts) => [
        ...prevProducts,
        ...productsResponse.data,
      ]);
      setMeta(productsResponse.meta);
      setCurrentPage(nextPage);
    } catch (error) {
      // Handle error if needed
    }
  };

  const links = [
    {
      path: "/",
      title: "Home",
    },
    {
      title: !isLoading && !isError ? category.name : "",
    },
  ];

  return (
    <div className="my-4">
      <BreadCrumb
        links={links}
        title={!isLoading && !isError ? category.name : ""}
      />

      <Container>
        {!isLoading && !isError && (
          <PCollection
            products={products}
            isLoading={isLoading}
            isError={isError}
          />
        )}
      <Pagination
        currentPage={currentPage}
        loaded={!isLoading}
        meta={meta}
        handleLoadMore={handleLoadMore}
      />
      </Container>

    </div>
  );
};

export default Collection;
