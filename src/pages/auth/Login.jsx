import React, { useState } from "react";
import "../../style/Login.css";
import OtpLogin from "./otplogin";

const FarmerLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOTPPage, setShowOTPPage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.length === 10) {
      setShowOTPPage(true); // Show OTPLogin component
    } else {
      alert("Please enter a valid 10-digit phone number.");
    }
  };

  return (
    <>
      {!showOTPPage ? (
        <div className="farmer-login-container">
          <div className="farmer-login-card">
            <h1 className="farmer-title">Welcome to AgriConnect</h1>
            <p className="farmer-subtitle">Connecting Farmers, Delivering Solutions</p>
            <form className="farmer-form" onSubmit={handleSubmit}>
              <div className="farmer-input-group">
                <div className="farmer-phone-input" >
                  <span>+91</span>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    maxLength="10"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="farmer-button">
                Continue
              </button>
            </form>
            <p className="farmer-footer-text">
              By continuing, you agree to our <a href="#">Terms of Service</a> &{" "}
              <a href="#">Privacy Policy</a>
            </p>
          </div>
        </div>
      ) : (
        // Render the OTPLogin component and pass phoneNumber as a prop
        <OtpLogin phoneNumber={phoneNumber} />
      )}
    </>
  );
};

export default FarmerLogin;
