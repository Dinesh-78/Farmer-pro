import React from "react";
import "../../style/footer.css";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        {/* AGRO MART Section */}
        <div className="footer-section footer-about">
          <h2>AGRO MART</h2>
          <p>We have vision to make good health</p>
          <div className="footer-socials">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>

        {/* NEWS Section */}
        <div className="footer-section footer-news">
          <h3>NEWS</h3>
          <p>Delivery Our Products to cities</p>
          <p>Expand FMCG products also</p>
        </div>

        {/* OUR SERVICES Section */}
        <div className="footer-section footer-services">
          <h3>OUR SERVICES</h3>
          <ul>
            <li><i className="fas fa-leaf"></i> Buy Products</li>
            <li><i className="fas fa-leaf"></i> Sell Products</li>
            <li><i className="fas fa-leaf"></i> Stores Info</li>
          </ul>
        </div>

        {/* CONTACT US Section */}
        <div className="footer-section footer-contact">
          <h3>CONTACT US</h3>
          <p><i className="fas fa-phone"></i> +91 9300484388</p>
          <p><i className="fas fa-envelope"></i> agromart@gmail.com</p>
          <p>
            <i className="fas fa-map-marker-alt"></i> Near KPHB Metro Station,
            Kukatpally, Hyderabad
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          &copy; All Copyright 2024 Reserved to <span>AGRO MART</span> |{" "}
          <a href="#">Term of use</a> | <a href="#">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
