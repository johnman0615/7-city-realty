import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom"; // Use React Router for navigation
import Navbar from "../components/NavbarComponent";
import { login } from "../api/authAPI";
import "../styles/base.css"; // Global styles
import "../styles/navbar.css"; // Navbar-specific styles
import "../styles/login.css"; // Login-specific styles

const LandingPage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null); // Set the error state type to string or null
  const navigate = useNavigate(); // Using React Router's navigate

  // Login handler
  const handleLogin = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    // Add validation for empty fields
    if (!username.trim() || !password.trim()) {
      setError("Both username and password are required.");
      return;
    }

    try {
      const response = await login({ username, password });
      localStorage.setItem("token", response.token);
      navigate("/home"); // Navigate to home page after successful login
    } catch (err: any) {
      console.error("Login Error:", err);
      setError("Invalid username or password");
    }
  }, [username, password, navigate]);

  // Set selected category (can be expanded as needed)
  const setSelectedCategory = useCallback(() => {
    console.log("Category set");
    // Additional functionality for setting category can be added here
  }, []);

  // Logout handler
  const onLogout = useCallback(() => {
    localStorage.removeItem("token");
    navigate("/"); // Redirect to the landing page on logout
  }, [navigate]);

  return (
    <div>
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
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  aria-label="Username"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-label="Password"
                  required
                />
              </div>
              <button type="submit">Login</button>
            </form>
            {error && <p className="error-message">{error}</p>} {/* Styled error message */}
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
