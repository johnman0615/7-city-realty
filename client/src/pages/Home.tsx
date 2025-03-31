import React from "react";
import '../../styles/global.css';



const Home: React.FC = () => {
  const handleLogout = () => {
      localStorage.removeItem('token'); // Clear the token
      window.location.href = '/'; // Redirect to the login page
  };

  return (
      <div className="home-container">
          <h1 className="home-title">Welcome to 7 Cities Realty</h1>
          <button className="home-button" onClick={handleLogout}>
              Logout
          </button>
      </div>
  );
};

export default Home;