import { useState } from 'react';
import React, { useState } from "react";
import Navbar from "../components/NavbarComponent";

interface SellProperty {
    id: number;
    name: string;
    location: string;
    price: number;
    image: string;
}

const sellProperties: SellProperty[] = [
    {id: 1, name: 'House 1', location: 'Location 1', price: 100000, image: 'house1.jpg'},
    {id: 2, name: 'House 2', location: 'Location 2', price: 200000, image: 'house2.jpg'},
    {id: 3, name: 'House 3', location: 'Location 3', price: 300000, image: 'house3.jpg'},
    ];
const SellPage = () => {
    const [selectedProperty, setSelectedProperty] = useState<SellProperty | null>(null);

    return (
        <div>
            <h1>Sell a Property</h1>
            <div>
                <h2>Properties</h2>
                <ul>
                    {sellProperties.map(property => (
                        <li key={property.id}>
                            <button onClick={() => setSelectedProperty(property)}>
                                {property.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            {selectedProperty && (
                <div>
                    <h2>{selectedProperty.name}</h2>
                    <p>Location: {selectedProperty.location}</p>
                    <p>Price: ${selectedProperty.price}</p>
                    <img src={selectedProperty.image} alt={selectedProperty.name} />
                </div>
            )}
        </div>
    );
}
  return (
    <div>
      <Navbar /> 
      <h1>Sell a Property</h1>
      <div>
        <h2>Properties</h2>
        <ul>
          {sellProperties.map((property) => (
            <li key={property.id}>
              <button onClick={() => setSelectedProperty(property)}>
                {property.name}
              </button>
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

import { useState } from 'react';

interface SellProperty {
    id: number;
    name: string;
    location: string;
    price: number;
    image: string;
}

const sellProperties: SellProperty[] = [
    {id: 1, name: 'House 1', location: 'Location 1', price: 100000, image: 'house1.jpg'},
    {id: 2, name: 'House 2', location: 'Location 2', price: 200000, image: 'house2.jpg'},
    {id: 3, name: 'House 3', location: 'Location 3', price: 300000, image: 'house3.jpg'},
    ];
const SellPage = () => {
    const [selectedProperty, setSelectedProperty] = useState<SellProperty | null>(null);

    return (
        <div>
            <h1>Sell a Property</h1>
            <div>
                <h2>Properties</h2>
                <ul>
                    {sellProperties.map(property => (
                        <li key={property.id}>
                            <button onClick={() => setSelectedProperty(property)}>
                                {property.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            {selectedProperty && (
                <div>
                    <h2>{selectedProperty.name}</h2>
                    <p>Location: {selectedProperty.location}</p>
                    <p>Price: ${selectedProperty.price}</p>
                    <img src={selectedProperty.image} alt={selectedProperty.name} />
                </div>
            )}
        </div>
    );
}
export default SellPage;