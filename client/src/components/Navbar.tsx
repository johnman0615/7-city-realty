import React from "react";
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
    </nav>
  );
};

export default Navbar;
