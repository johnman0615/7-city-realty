import React from "react";
import "@styles/home.css";


const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to 7 Cities Realty</h1>
      <a href="/buy" className="home-button">Explore Properties</a>
    </div>
  );
};

export default HomePage;