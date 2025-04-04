import React from "react";
import Navbar from "../components/NavbarComponent";
import "../styles/navbar.css";

const SellPage: React.FC = () => {
  return (
    <div>
      <Navbar setSelectedCategory={() => {}} onLogout={() => {}} />
      <h1>Sell a Property</h1>
      <p>List your property for sale here.</p>
    </div>
  );
};

export default SellPage;

