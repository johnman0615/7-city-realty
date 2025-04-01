import React, { useState } from "react";
import { Link } from "react-router-dom";
import "@styles/login.css";

const LandingPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="landing-container">
      <div className="login-container">
        <div className="logo">
          <img src="/assets/realestate logo.png" alt="7 Cities Realty Logo" />
        </div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="remember-me">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <button type="submit">Login</button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <div className="additional-links">
          <Link to="/forgot-password">Forgot Password?</Link>
          <Link to="/register">Create an Account</Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
