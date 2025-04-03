import React from "react";
import { Link } from "react-router-dom";
import "@styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>7 Cities Realty</h1>
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
