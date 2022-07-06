import React from "react";

function SearchBar({handleSortAlphabet, handleSortPrice, handleStocktypeChange}) {

  function onSortChange(e){
    handleSortAlphabet()
  }

  function onPriceChange(e){
    handleSortPrice()
  }

  function onStockChange(e){
    handleStocktypeChange(e)
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
          onChange={onSortChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onChange={onPriceChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={onStockChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
