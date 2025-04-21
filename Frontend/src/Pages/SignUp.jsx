import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/signup.css';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false); // Track if OTP has been sent
  const navigate = useNavigate();
  const url = process.env.REACT_APP_API_BASE_URL;

  const handleSendOtp = (e) => {
    e.preventDefault();
    console.log("Sending OTP to:", email);

    // Send OTP to the provided email
    axios.post(`${url}/api/sendemail`, { email })
      .then((response) => {
        console.log("OTP Sent Response:", response);
        setOtpSent(true); // Show OTP input field
      })
      .catch((err) => console.error("Error Sending OTP:", err));
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    console.log("Verifying OTP:", { email, otp });

    // Verify the provided OTP
    axios.post(`${url}/api/verify-otp`, { email, otp })
      .then((response) => {
        console.log("OTP Verified Response:", response);
        
        // Automatically sign up the user after OTP verification
        console.log("Submitting Sign-Up:", { name, email, password });
        return axios.post(`${url}/api/homes`, { name, email, password });
      })
      .then((result) => {
        console.log("Sign-Up Response:", result);
        navigate("/Register"); // Redirect to register page
      })
      .catch((err) => console.error("Error Verifying OTP or Signing Up:", err));
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={otpSent ? handleVerifyOtp : handleSendOtp}>
          {!otpSent && (
            <>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="signup-button">
                Send OTP
              </button>
            </>
          )}

          {otpSent && (
            <>
              <div className="form-group">
                <label>Enter OTP</label>
                <input
                  type="text"
                  name="otp"
                  placeholder="Enter the OTP sent to your email"
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
              <button type="submit" className="signup-button">
                Verify OTP and Sign Up
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
