import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage"; // Ensure this file exists
import Home from "./pages/HomePage"; // Ensure this file exists
import Login from "./pages/LandingPage"; // Ensure this file exists
import RentPage from "./pages/RentPage"; // Ensure this file exists
import BuyPage from "./pages/BuyPage"; // Ensure this file exists
import SellPage from "./pages/SellPage"; // Ensure this file exists
import PropertyDetail from "./pages/PropertyDetail"; // Ensure this file exists
import "./styles/base.css"; // Ensure this file exists

// Define the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "rent",
        element: <RentPage />,
      },
      {
        path: "buy",
        element: <BuyPage />,
      },
      {
        path: "sell",
        element: <SellPage />,
      },
      {
        path: "property/:id",
        element: <PropertyDetail />,
      },
    ],
  },
]);

// Render the application
const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
