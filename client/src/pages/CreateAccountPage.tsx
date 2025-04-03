import React from "react";
import { Link } from "react-router-dom";
import "@styles/login.css";

const CreateAccount: React.FC = () => {
  return (
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
  );
};

export default CreateAccount;