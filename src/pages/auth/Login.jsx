import React from 'react';
import '../../style/Login.css';

const FarmerLogin = () => {
  return (
    <div className="farmer-login-container">
      <div className="farmer-login-card">
        <h1 className="farmer-title">Welcome to AgriConnect</h1>
        <p className="farmer-subtitle">Connecting Farmers, Delivering Solutions</p>
        <form className="farmer-form">
          <div className="farmer-input-group">
            {/* <label htmlFor="phone">Phone Number</label> */}
            <div className="farmer-phone-input">
              <span>+91</span>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                maxLength="10"
                required
              />
            </div>
          </div>
          <button type="submit" className="farmer-button">
            Continue
          </button>
        </form>
        <p className="farmer-footer-text">
          By continuing, you agree to our <a href="#">Terms of Service</a> & <a href="#">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default FarmerLogin;
