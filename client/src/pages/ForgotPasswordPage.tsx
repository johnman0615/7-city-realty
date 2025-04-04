import * as React from 'react';
import { Link } from "react-router-dom";
import Navbar from "../components/NavbarComponent";
import "@styles/navbar.css"; // Ensure navbar styles are applied
import "@styles/login.css"; // Ensure login styles are applied

const ForgotPassword: React.FC = () => {
  return (
    <div>
      <Navbar setSelectedCategory={() => {}} onLogout={() => { console.log('Logout clicked'); }} />
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
    </div>
  );
};

export default ForgotPassword;