import React, { useState, useEffect } from "react";

const Filter = ({ setCategoryFilter, setPriceFilter }) => {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  useEffect(() => {
    setCategoryFilter(category); // Pass the category filter to Shop
    setPriceFilter(price); // Pass the price filter to Shop
  }, [category, price, setCategoryFilter, setPriceFilter]);

  return (
    <div className="filter">
      <label htmlFor="category">Category:</label>
      <select id="category" value={category} onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        <option value="Vegetables">Vegetables</option>
        {/* Add more categories as needed */}
      </select>

      <label htmlFor="price">Price (₹):</label>
      <input
        type="number"
        id="price"
        value={price}
        onChange={handlePriceChange}
        placeholder="Max Price"
      />
    </div>
  );
};

export default Filter;
