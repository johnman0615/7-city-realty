import React, { useState } from "react";
import Navbar from "../components/NavbarComponent";
import "../styles/navbar.css";

interface RentalProperty {
  id: number;
  name: string;
  location: string;
  price: number;
  image: string;
}

const rentalProperties: RentalProperty[] = [
  { id: 1, name: "Apartment 1", location: "Location 1", price: 1000, image: "house1.jpg" },
  { id: 2, name: "Apartment 2", location: "Location 2", price: 2000, image: "house2.jpg" },
  { id: 3, name: "Apartment 3", location: "Location 3", price: 3000, image: "house3.jpg" },
];

const RentPage: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<RentalProperty | null>(null);

  return (
    <div>
      <Navbar setSelectedCategory={() => {}} onLogout={() => {}} />
      <h1>Rent a Property</h1>
      <div>
        <h2>Properties</h2>
        <ul>
          {rentalProperties.map((property) => (
            <li key={property.id}>
              <button onClick={() => setSelectedProperty(property)}>{property.name}</button>
            </li>
          ))}
        </ul>
      </div>
      {selectedProperty && (
        <div>
          <h2>{selectedProperty.name}</h2>
          <p>Location: {selectedProperty.location}</p>
          <p>Price: ${selectedProperty.price}</p>
          <img src={`/assets/${selectedProperty.image}`} alt={selectedProperty.name} />
        </div>
      )}
    </div>
  );
};

export default RentPage;