import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../components/ui/Card";
import { Link } from "react-router-dom";
import "../styles/buttons.css"; // Corrected relative path for styles
import "@styles/home.css"; // Added styles from the second file
import Navbar from "../components/NavbarComponent";

const properties = [
  {
    id: 1,
    title: "Cozy 2-Bedroom Apartment",
    location: "Downtown, New York",
    price: "$2,500/month",
    description: "A beautiful apartment located in the heart of downtown. Close to all amenities.",
    category: "Rent",
  },
  {
    id: 2,
    title: "Luxury Villa",
    location: "Malibu, California",
    price: "$10,000/month",
    description: "A stunning villa with ocean views and a private pool.",
    category: "Rent",
  },
  {
    id: 3,
    title: "Modern Studio",
    location: "Austin, Texas",
    price: "$1,800/month",
    description: "A sleek studio apartment perfect for young professionals.",
    category: "Rent",
  },
  {
    id: 4,
    title: "816 E Orange Street",
    location: "Fayetteville, NC 28301",
    price: "$30,000",
    description: "Residential property located in a peaceful neighborhood. MLS# 10084390.",
    category: "Buy",
  },
  {
    id: 5,
    title: "907 Field Ivy Drive",
    location: "Fuquay Varina, NC 27526",
    price: "$329,900",
    description: "Spacious residential home with modern amenities. MLS# 10075556.",
    category: "Buy",
  },
  {
    id: 6,
    title: "930 Old Halifax Road",
    location: "Louisburg, NC 27549",
    price: "$300,000",
    description: "Charming residential property in a serene location. MLS# 10076094.",
    category: "Buy",
  },
];

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Buy");
  const [filteredProperties, setFilteredProperties] = useState(properties);

  useEffect(() => {
    const filtered = properties.filter(
      (property) =>
        (property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.location.toLowerCase().includes(searchQuery.toLowerCase())) &&
        property.category === selectedCategory
    );
    setFilteredProperties(filtered);
  }, [searchQuery, selectedCategory]);

  return (
    <div className="home-container">
      {/* Navbar */}
      <Navbar setSelectedCategory={setSelectedCategory} />

      {/* Welcome Section */}
      <div className="text-center mb-6">
        <h1 className="home-title">Welcome to 7 Cities Realty</h1>
        <a href="/buy" className="home-button">
          Explore Properties
        </a>
      </div>

      {/* Navigation Links */}
      <nav className="flex justify-center mb-6 space-x-6">
        <Link to="/buy" className="btn">
          Buy
        </Link>
        <Link to="/rent" className="btn">
          Rent
        </Link>
        <Link to="/sell" className="btn">
          Sell
        </Link>
        <Link to="/" className="btn">
          Home
        </Link>
      </nav>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search properties..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Property Listings */}
      <h1 className="text-3xl font-bold text-center mb-6">Property Listings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <Card key={property.id} className="shadow-lg rounded-2xl">
            <CardContent>
              <h2 className="text-xl font-semibold">{property.title}</h2>
              <p className="text-gray-600">{property.location}</p>
              <p className="text-green-600 font-bold">{property.price}</p>
              <p className="text-gray-700 mt-2">{property.description}</p>
              <Link to={`/property/${property.id}`}>
                <button className="btn mt-4 w-full">View Details</button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
