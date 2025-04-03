
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "@styles/login.css";

const LandingPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      setError("");
      navigate("/home"); // Use navigate instead of window.location.href
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="landing-container">
      <div className="login-container">
        <div className="logo">
          <img src="/assets/realestate-logo.png" alt="7 Cities Realty Logo" />
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
          <button type="submit" className="btn">Login</button>
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
