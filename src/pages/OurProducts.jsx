import React, { useEffect } from 'react';
import '../style/ourproducts.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurProducts = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Animation happens once when scrolled
    });
   
  }, []);

  const products = [
    { id: 1, name: "Tomatoes", price: "$10", offer: "20% Off", img: "https://via.placeholder.com/150" },
    { id: 2, name: "Carrots", price: "$8", offer: "15% Off", img: "https://via.placeholder.com/150" },
    { id: 3, name: "Broccoli", price: "$12", offer: "10% Off", img: "https://via.placeholder.com/150" },
    { id: 4, name: "Spinach", price: "$6", offer: "25% Off", img: "https://via.placeholder.com/150" },
  ];

  return (
    <section className="our-products-container">
      <h2 className="our-products-title" data-aos="fade-up">Our Fresh Vegetables</h2>
      <div className="our-products-grid">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="product-card"
            data-aos="zoom-in" // Add AOS animation
            data-aos-delay={index * 200} // Delay animation for each card
          >
            <div className="product-image">
              <img src={product.img} alt={product.name} />
              <span className="product-offer">{product.offer}</span>
            </div>
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <button className="product-button">Shop Now</button>
            </div>
          </div>
        ))}
      </div>
      <button className='our-btn'>VIEW PRODUCTS</button>
    </section>
  );
};

export default OurProducts;
