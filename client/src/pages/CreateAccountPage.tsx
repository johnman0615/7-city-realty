import React from "react";
import "../styles/login.css"; 

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
          <input type="text" placeholder="Future State" />
          <input type="email" placeholder="Future State" />
          <input type="password" placeholder="Enter your password" />
          <input type="password" placeholder="Confirm your password" />
          <button type="submit">Register</button>
        </form>
        <a href="/">Back to Login</a>
      </div>
    </div>
  );
};

export default CreateAccount;