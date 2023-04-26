import React from "react";
import "./search.css"
function Search() {
  return (
    <div>
      <form className="d-flex" role="search">
        <input
          className="search form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
