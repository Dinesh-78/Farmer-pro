import React, { useState } from "react";
import { productsdata } from "../../constants/data"; // Assuming this is the file where product data is stored
import "../../style/shop.css"; // Custom CSS
import { FiSearch } from "react-icons/fi";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on the search term
  const filteredProducts = productsdata.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <header className="shop-header">
        <div className="shop-search-container">
          <input
            type="text"
            className="shop-search-input"
            placeholder="Search for vegetables, fruits, and more..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="shop-search-button">
            <FiSearch size={20} />
          </button>
        </div>
      </header>

      <div className="shop-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="shop-card" key={product.id}>
              {/* Offer Ribbon */}
              {product.offer && (
                <div className="shop-card-offer-tab">
                  <span>{product.offer}<br />Off</span>
                </div>
              )}
              <img src={product.img} alt={product.name} className="shop-card-img" />
              <h3 className="shop-card-title">{product.name}</h3>
              <p className="shop-card-price">
                <span className="shop-original-price">₹{product.orginalprice}</span>{" "}
                <span className="shop-final-price">₹{product.finalprice}</span>
              </p>
              <button className="shop-add-cart-button">Add to Cart</button>
            </div>
          ))
        ) : (
          <p className="shop-no-results">No products found</p>
        )}
      </div>
    </>
  );
};

export default Shop;