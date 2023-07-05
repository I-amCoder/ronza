import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = ({ canvasRef = null }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e = null) => {
    if (e.key === "Enter") {
      navigate(`/search?q=${query}`);
      if (canvasRef) {
        canvasRef(false);
      }
    } else {
      return;
    }
    navigate(`/search?q=${query}`);
    if (canvasRef) {
        canvasRef(false);
    }
  };
  return (
    <div className="search-container mt-3">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        onKeyPress={handleSearch}
        placeholder="Try Airpods Pro"
        className="form-control search-input"
      />

      <button
        onClick={() => handleSearch({ key: "Enter" })}
        className="btn-grad mt-4"
      >
        Search
      </button>
    </div>
  );
};

export default SearchForm;
