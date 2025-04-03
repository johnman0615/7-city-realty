import React from "react";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import "@styles/navbar.css";

interface NavbarProps {
  setSelectedCategory: (category: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setSelectedCategory }) => {
  return (
    <nav className="navbar">
      {/* Logo on the left */}
      <h1 className="navbar-logo">7 Cities Realty</h1>

      {/* Navigation tabs */}
      {showTabs && (
        <ul className="nav-tabs">
          <li><a href="/home">Home</a></li>
          <li><a href="/buy">Buy</a></li>
          <li><a href="/sell">Sell</a></li>
          <li><a href="/rent">Rent</a></li>
          <li><a href="/agents">Agents</a></li>
        </ul>
      )}

      {/* Logout button on the far right */}
      {showLogout && (
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      )}
=======
import { Link } from "react-router-dom"; // Import Link from react-router-dom

interface NavbarProps {
  setSelectedCategory: (category: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setSelectedCategory }) => {
  return (
    <nav className="flex justify-center mb-6 space-x-6">
      <Link
        to="/buy" // Use Link for internal navigation
        className="text-blue-500 hover:underline"
        onClick={() => setSelectedCategory("Buy")} // Set category when clicked
      >
        Buy
      </Link>
      <Link
        to="/rent"
        className="text-blue-500 hover:underline"
        onClick={() => setSelectedCategory("Rent")}
      >
        Rent
      </Link>
      <Link
        to="/sell"
        className="text-blue-500 hover:underline"
        onClick={() => setSelectedCategory("Sell")}
      >
        Sell
      </Link>
      <Link
        to="/"
        className="text-blue-500 hover:underline"
        onClick={() => setSelectedCategory("Buy")}
      >
        Home
      </Link>
>>>>>>> origin/main
    </nav>
  );
};

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar;
>>>>>>> origin/main
