import React, { useState } from "react";

const ProductsFilter = ({ setPriceRange, setSortOption }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const [sortOption, setSortOptionState] = useState("lowToHigh");

  const handlePriceChange = () => {
    setPriceRange([minPrice, maxPrice]);
  };

  const handleSortChange = (e) => {
    const selectedOption = e.target.value;
    setSortOption(selectedOption);
    setSortOptionState(selectedOption);
  };

  return (
    <div className="filter-container">
      <h2>Filters</h2>

      {/* Price Filter */}
      <div>
        <p>Price Range: ${minPrice} - ${maxPrice}</p>
        <input
          type="range"
          min="0"
          max="500"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          onMouseUp={handlePriceChange}
        />
        <input
          type="range"
          min="0"
          max="500"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          onMouseUp={handlePriceChange}
        />
      </div>

      {/* Sort Filter */}
      <div>
        <label htmlFor="sortOption">Sort By Price:</label>
        <select
          id="sortOption"
          value={sortOption}
          onChange={handleSortChange}
        >
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default ProductsFilter;
