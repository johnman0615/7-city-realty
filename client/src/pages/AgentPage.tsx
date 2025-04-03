import React from "react";
import Navbar from "../components/NavbarComponent";
import "../styles/navbar.css";

const AgentPage: React.FC = () => {
  return (
    <div>
      <Navbar setSelectedCategory={() => {}} onLogout={() => {}} />
      <h1>Our Agents</h1>
      <p>Meet our professional real estate agents.</p>
    </div>
  );
};

export default AgentPage;