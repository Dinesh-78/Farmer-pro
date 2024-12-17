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
    { id: 1, name: "Tomatoes", price: "$10", offer: "20% Off", img: "https://cdn.pixabay.com/photo/2017/10/06/17/16/tomato-2823824_1280.jpg" },
    { id: 2, name: "Carrots", price: "$8", offer: "15% Off", img: "https://cdn.pixabay.com/photo/2017/05/13/15/23/carrot-2309814_1280.jpg" },
    { id: 3, name: "Broccoli", price: "$12", offer: "10% Off", img: "https://cdn.pixabay.com/photo/2012/12/24/08/39/agriculture-72254_1280.jpg" },
    { id: 4, name: "Spinach", price: "$6", offer: "25% Off", img: "https://cdn.pixabay.com/photo/2023/01/13/15/41/onions-7716342_1280.jpg" },
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
