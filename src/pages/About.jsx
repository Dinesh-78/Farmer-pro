import React from 'react';
import '../style/About.css';

const FarmingConnect = () => {
  return (
    <div className="farming-connect">
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">Farming Connect</h1>
          <p className="header-tagline">Your Trusted Link to Fresh, Local, and Sustainable Farming</p>
        </div>
        <img 
          src="https://example.com/farm-banner.jpg" 
          alt="Fresh farm banner" 
          className="header-image"
        />
      </header>

      <section className="products">
        <h2 className="section-title">Our Products</h2>
        <ul className="product-list">
          <li><strong>Fresh Fruits & Vegetables:</strong> Seasonal produce straight from the fields.</li>
          <li><strong>Dairy Products:</strong> Milk, cheese, yogurt, and butter from grass-fed cows.</li>
          <li><strong>Meat & Poultry:</strong> Ethically raised livestock ensuring premium cuts.</li>
          <li><strong>Farm-Fresh Eggs:</strong> Collected daily from free-range hens.</li>
          <li><strong>Artisan Goods:</strong> Homemade jams, honey, sauces, pickles, and baked items.</li>
          <li><strong>Herbs & Flowers:</strong> Culinary herbs and fresh-cut blooms.</li>
        </ul>
      </section>

      <section className="farmers">
        <h2 className="section-title">Meet Our Farmers</h2>
        <p>We collaborate with a community of passionate farmers committed to:</p>
        <ul className="farmer-values">
          <li><strong>Sustainability:</strong> Eco-friendly methods to nurture the land.</li>
          <li><strong>Quality:</strong> Ensuring the highest standards of freshness and flavor.</li>
          <li><strong>Transparency:</strong> Direct connection to the people who grow your food.</li>
        </ul>
      </section>

      <section className="why-choose-us">
        <h2 className="section-title">Why Choose Farming Connect?</h2>
        <ul className="benefits-list">
          <li>Direct From the Farm: No middlemen, just fresh produce.</li>
          <li>Sustainably Grown: Eco-conscious practices that care for the earth.</li>
          <li>Freshness Guaranteed: Harvested and delivered at their freshest.</li>
          <li>Community Support: Supporting local farming families.</li>
        </ul>
      </section>

      <footer className="footer">
        <p>Explore our subscription boxes for weekly deliveries of fresh products!</p>
        <p>Follow us on social media for updates and farmer stories.</p>
        <p className="footer-tagline">Let’s connect you to the farm.</p>
      </footer>
    </div>
  );
};

export default FarmingConnect;
