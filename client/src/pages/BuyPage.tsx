import React, { useState } from "react";
import Navbar from "../components/NavbarComponent";

interface Property {
  id: number;
  name: string;
  location: string;
  price: number;
  image: string;
}

const properties: Property[] = [
  { id: 1, name: "House 1", location: "Location 1", price: 100000, image: "house1.jpg" },
  { id: 2, name: "House 2", location: "Location 2", price: 200000, image: "house2.jpg" },
  { id: 3, name: "House 3", location: "Location 3", price: 300000, image: "house3.jpg" },
];

function BuyPage() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div>
      <Navbar setSelectedCategory={setSelectedCategory} />
      {/* Page content */}
    </div>
  );
}

export default BuyPage;