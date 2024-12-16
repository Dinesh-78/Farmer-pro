import React from 'react';
import { FaCarrot, FaFish, FaAppleAlt, FaDrumstickBite } from 'react-icons/fa';  // Import icons for categories

const Categories = () => {
  return (
    <div className="categories-container">
      <div className="category-item">
        <FaCarrot className="category-icon" />
        <span className="category-label">Vegetables</span>
      </div>
      <div className="category-item">
        <FaFish className="category-icon" />
        <span className="category-label">Non Veg</span>
      </div>
      <div className="category-item">
        <FaAppleAlt className="category-icon" />
        <span className="category-label">Fruits</span>
      </div>
      <div className="category-item">
        <FaDrumstickBite className="category-icon" />
        <span className="category-label">Meat</span>
      </div>
    </div>
  );
}

export default Categories;
