import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"; // Make sure this path is correct for your project structure

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h1><Link to="/" style={
        { textDecoration: "none", color: "inherit" }
      }>7 Cities Realty</Link></h1>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/buy">Buy</Link></li>
        <li><Link to="/sell">Sell</Link></li>
        <li><Link to="/rent">Rent</Link></li>
        <li><Link to="/agents">Agents</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
