import React from "react";
import {BrowserRouter as Routes, Route } from "react-router-dom";  
import LandingPage from "./pages/LandingPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import HomePage from "./pages/HomePage";
import BuyPage from "./pages/BuyPage";
import SellPage from "./pages/SellPage";
import RentPage from "./pages/RentPage";
import AgentPage from "./pages/AgentPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<CreateAccountPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/buy" element={<BuyPage />} />
      <Route path="/sell" element={<SellPage />} />
      <Route path="/rent" element={<RentPage />} />
      <Route path="/agent" element={<AgentPage />} />
    </Routes>
  );
}

export default App;
