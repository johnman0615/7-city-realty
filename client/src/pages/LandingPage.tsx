import React, { useState } from "react";
import Navbar from "../components/NavbarComponent";
import { login } from "../api/authAPI";
import "../styles/base.css"; // Global styles
import "../styles/navbar.css"; // Navbar-specific styles
import "../styles/login.css"; // Login-specific styles

const LandingPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login({ username, password });
      console.log("Login Response:", response); // Debug the response
      localStorage.setItem("token", response.token);
      window.location.href = "/home";
    } catch (err) {
      console.error("Login Error:", err); // Debug the error
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <Navbar setSelectedCategory={() => {}} onLogout={() => {}} />
      <div className="page-content">
        <div className="landing-container">
          <h1>Welcome to 7 Cities Realty</h1>
          <p>Your trusted partner in buying, selling, and renting properties.</p>
          <div className="login-container">
            <div className="logo">
              <img src="/assets/realestate-logo.png" alt="7 Cities Realty Logo" />
            </div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit">Login</button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className="additional-links">
              <a href="/forgot-password">Forgot Password?</a>
              <a href="/create-account">Create an Account</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
