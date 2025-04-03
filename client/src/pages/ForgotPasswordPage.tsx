import React from "react";
import { Link } from "react-router-dom";
import "@styles/login.css";

const ForgotPassword: React.FC = () => {
  return (
    <div className="landing-container">
      <div className="login-container">
        <div className="logo">
          <img src="/assets/realestate-logo.png" alt="7 Cities Realty Logo" />
        </div>
        <h1>Forgot Password</h1>
        <p>Please contact support to reset your password.</p>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Reset Password</button>
        </form>
        <Link to="/">Back to Login</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;