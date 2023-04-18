import React from "react";

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
        <button className="search-btn btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
