import React, { useState } from "react";
import "../../style/Login.css";

const OTPLogin = ({ phoneNumber }) => {
  const [otp, setOtp] = useState("");

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      alert("OTP Verified Successfully!");
      // Here, you can redirect or perform any logic
    } else {
      alert("Please enter a valid 6-digit OTP.");
    }
  };

  return (
    <div className="farmer-otp-container">
      <div className="farmer-otp-card">
        <h1 className="farmer-title">Enter OTP</h1>
        <p className="farmer-subtitle">
          We sent a 6-digit OTP to your phone number: <b>+91 {phoneNumber}</b>
        </p>
        <form className="farmer-form" onSubmit={handleOTPSubmit}>
          <div className="farmer-input-group">
            <input
              type="text"
              placeholder="Enter 6-digit OTP"
              maxLength="6"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="farmer-otp-input"
              required
            />
          </div>
          <button type="submit" className="farmer-button">
            Verify & Continue
          </button>
        </form>
        <p className="farmer-footer-text">
          Didn't receive the OTP? <a href="#">Resend OTP</a>
        </p>
      </div>
    </div>
  );
};

export default OTPLogin;
