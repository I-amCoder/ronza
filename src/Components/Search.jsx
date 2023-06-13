import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e=null) => {
    if(e.key==="Enter"){
        navigate(`/search?q=${query}`)
    }else{
        return;
    }
    navigate(`/search?q=${query}`)
  };
  return (
    <section className="search-section bg-primary py-5">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center search">
            <h3>Discover Your Perfect Match</h3>
            <div className="search-container mt-3">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                onKeyPress={handleSearch}
                placeholder="Try Airpods Pro"
                className="form-control search-input"
              />

              <button onClick={handleSearch} className="btn-grad mt-4">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
