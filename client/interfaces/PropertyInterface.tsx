import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MapView from "../components/MapView";
import { retrievePropertyById } from "api.ts";

interface Property {
  id: number;
  title: string;
  address: string;
  city: string;
  state: string;
  price: number;
  description: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  propertyType: "sale" | "rental";
  photos: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

const PropertyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        if (id) {
          const data = await retrievePropertyById(id);
          setProperty(data);
        }
      } catch (error) {
        console.error("Failed to fetch property:", error);
      }
    };
    fetchProperty();
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{property.title}</h1>
      <p>{property.description}</p>
      <MapView center={property.coordinates} />
    </div>
  );
};

export default PropertyDetailPage;