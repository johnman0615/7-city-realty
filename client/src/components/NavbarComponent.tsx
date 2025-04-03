import React from "react";
import "../styles/navbar.css"; // Verify this path matches your project structure

interface NavbarProps {
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  onLogout: () => void; // Added a prop for handling logout
}

const Navbar: React.FC<NavbarProps> = ({ setSelectedCategory, onLogout }) => {
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <h1 className="navbar-title">7 Cities Realty</h1>
      <ul className="navbar-links">
        {["Buy", "Sell", "Rent", "Agent"].map((category) => (
          <li key={category}>
            <a
              href={`/${category.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                handleCategoryChange(category);
              }}
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
      <button
        className="logout-button"
        onClick={onLogout}
        aria-label="Logout"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
