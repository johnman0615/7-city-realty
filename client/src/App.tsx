import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import BuyPage from "./pages/BuyPage";
import SellPage from "./pages/SellPage";
import RentPage from "./pages/RentPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import Navbar from "./components/NavbarComponent";
import PropertyDetailPage from "./pages/PropertyDetail"; 
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/buy" element={<BuyPage />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/rent" element={<RentPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/register" element={<CreateAccountPage />} />
        <Route path="/property/:id" element={<PropertyDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;