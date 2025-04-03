import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/NavbarComponent";
import "@styles/navbar.css"; // Ensure navbar styles are applied
import "@styles/login.css"; // Ensure login styles are applied
import Property from "../../models/Property.js"; // Add `.js`
import authenticateJWT from "../../middleware/authenticateJWT.js"; // Add `.js`

const CreateAccount: React.FC = () => {
  return (
    <div>
      <Navbar setSelectedCategory={() => {}} />
      <div className="landing-container">
        <div className="login-container">
          <div className="logo">
            <img src="/assets/realestate-logo.png" alt="7 Cities Realty Logo" />
          </div>
          <h1>Create an Account</h1>
          <p>Account creation is currently not available. Please contact support.</p>
          <form>
            <input type="text" placeholder="Future State" disabled />
            <input type="email" placeholder="Future State" disabled />
            <input type="password" placeholder="Enter your password" disabled />
            <input type="password" placeholder="Confirm your password" disabled />
            <button type="submit" disabled>
              Register
            </button>
          </form>
          <Link to="/">Back to Login</Link>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;