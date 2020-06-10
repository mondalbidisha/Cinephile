import React, { useState } from "react";
import { Segment, Button } from 'semantic-ui-react'

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
    <Segment raised className="margin-top-no">
      <form className="search">
        <input
          value={searchValue}
          onChange={handleSearchBoxChanges}
          type="text"
        />
        <Button 
          primary 
          onClick={searchInputHandler}
          >
          SEARCH
        </Button>
      </form>
    </Segment>
  );
};

export default Search;
