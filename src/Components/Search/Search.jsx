import React from "react";
import SearchForm from "./SearchForm";

const Search = ({ title, bg }) => {


 

  return (
    <section id="search" className={`search-section bg-${bg || "light"} py-5`}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center search text-primary">
            <h3>{title || "Discover Your Perfect Match"}</h3>
            <SearchForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
