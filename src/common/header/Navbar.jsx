import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../style/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-logo">
          <NavLink to="/" className="logo-link">FarmerSite</NavLink>
        </div>
        <ul className={`navbar-links ${isMenuOpen ? 'show' : ''}`}>
          <li><NavLink to="/shop" className="navbar-link">Shop</NavLink></li>
          <li><NavLink to="/about" className="navbar-link">About</NavLink></li>
          {/* <li><NavLink to="/contact" className="navbar-link">Contact</NavLink></li> */}
          <li><NavLink to="/login" className="navbar-link">Login</NavLink></li>
          
        </ul>
        <div className="navbar-menu-toggle">
          <button className="menu-toggle-button" onClick={toggleMenu}>&#9776;</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
