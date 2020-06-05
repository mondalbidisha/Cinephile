import React, { useState } from "react";

const Search = ({ search }) => {
  
  const [searchValue, setSearchValue] = useState("");
  
  const handleSearchBoxChanges = (event) => {
    setSearchValue(event.target.value);
  }
  
  const resetSearchBox = () => {
    setSearchValue(null);
  }
  
  const searchInputHandler = (event) => {
    event.preventDefault();
    search(searchValue);
    resetSearchBox();
  }

  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchBoxChanges}
        type="text"
      />
      <input onClick={searchInputHandler} type="submit" value="SEARCH" />
    </form>
  );
};

export default Search;
