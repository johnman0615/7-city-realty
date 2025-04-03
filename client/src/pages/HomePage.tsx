import  { useState, useEffect, useLayoutEffect } from "react";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Buttons";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

const properties = [
  {
    id: 1,
    title: "Cozy 2-Bedroom Apartment",
    location: "Downtown, New York",
    price: "$2,500/month",
    description: "A beautiful apartment located in the heart of downtown. Close to all amenities.",
    category: "Rent"
  },
  {
    id: 2,
    title: "Luxury Villa",
    location: "Malibu, California",
    price: "$10,000/month",
    description: "A stunning villa with ocean views and a private pool.",
    category: "Rent"
  },
  {
    id: 3,
    title: "Modern Studio",
    location: "Austin, Texas",
    price: "$1,800/month",
    description: "A sleek studio apartment perfect for young professionals.",
    category: "Rent"
  },
  {
    id: 4,
    title: "816 E Orange Street",
    location: "Fayetteville, NC 28301",
    price: "$30,000",
    description: "Residential property located in a peaceful neighborhood. MLS# 10084390.",
    category: "Buy"
  },
  {
    id: 5,
    title: "907 Field Ivy Drive",
    location: "Fuquay Varina, NC 27526",
    price: "$329,900",
    description: "Spacious residential home with modern amenities. MLS# 10075556.",
    category: "Buy"
  },
  {
    id: 6,
    title: "930 Old Halifax Road",
    location: "Louisburg, NC 27549",
    price: "$300,000",
    description: "Charming residential property in a serene location. MLS# 10076094.",
    category: "Buy"
  }
];

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Buy");
  const [filteredProperties, setFilteredProperties] = useState(properties);

  useEffect(() => {
    // Perform filtering whenever searchQuery or selectedCategory changes
    const filtered = properties.filter(property =>
      (property.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
       property.location.toLowerCase().includes(searchQuery.toLowerCase())) &&
      property.category === selectedCategory
    );
    setFilteredProperties(filtered);
  }, [searchQuery, selectedCategory]); // Runs whenever searchQuery or selectedCategory changes

  useLayoutEffect(() => {
    console.log("The layout effect has run.");
  }, []); // Runs once after the DOM has been updated

  return (
    <div className="container mx-auto p-4">
      <Navbar setSelectedCategory={setSelectedCategory} />
=======
      <nav className="flex justify-center mb-6 space-x-6">
        <Link to="/buy" className="text-blue-500 hover:underline" onClick={() => setSelectedCategory("Buy")}>Buy</Link>
        <Link to="/rent" className="text-blue-500 hover:underline" onClick={() => setSelectedCategory("Rent")}>Rent</Link>
        <Link to="/sell" className="text-blue-500 hover:underline" onClick={() => setSelectedCategory("Sell")}>Sell</Link>
        <Link to="/" className="text-blue-500 hover:underline" onClick={() => setSelectedCategory("Buy")}>Home</Link>
      </nav>

      <h1 className="text-3xl font-bold text-center mb-6">Property Listings</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search properties..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <Card key={property.id} className="shadow-lg rounded-2xl">
            <CardContent>
              <h2 className="text-xl font-semibold">{property.title}</h2>
              <p className="text-gray-600">{property.location}</p>
              <p className="text-green-600 font-bold">{property.price}</p>
              <p className="text-gray-700 mt-2">{property.description}</p>
              <Link to={`/property/${property.id}`}>
                <Button className="mt-4 w-full">View Details</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};


export default HomePage;
