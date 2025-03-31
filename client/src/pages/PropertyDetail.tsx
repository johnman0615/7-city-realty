import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MapView from '../components/MapView';

// Property interface
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
  propertyType: 'sale' | 'rental';
  photos: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

// Mock function to simulate fetching property data
const getPropertyById = async (id: string): Promise<Property> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Return mock data
  return {
    id: parseInt(id),
    title: "Luxury Waterfront Home",
    address: "123 Lakeside Drive",
    city: "Seattle",
    state: "WA",
    price: 1250000,
    description: "This stunning waterfront property features panoramic lake views, a private dock, and luxurious finishes throughout. The open floor plan seamlessly connects indoor and outdoor living spaces, perfect for entertaining.",
    bedrooms: 4,
    bathrooms: 3.5,
    squareFeet: 3200,
    propertyType: 'sale',
    photos: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    ],
    coordinates: {
      lat: 47.6062,
      lng: -122.3321
    }
  };
};

// Simple loading spinner component
const LoadingSpinner = () => (
  <div className="d-flex justify-content-center align-items-center">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

// Simple image gallery that shows just the first image
const SimpleImageGallery: React.FC<{images: string[]}> = ({ images }) => {
  if (!images || images.length === 0) {
    return (
      <div className="bg-light rounded p-3 d-flex justify-content-center align-items-center" style={{height: '250px'}}>
        <p className="text-muted">No images available</p>
      </div>
    );
  }

  return (
    <div className="rounded overflow-hidden">
      <img 
        src={images[0]} 
        alt="Property main image"
        className="img-fluid w-100" 
        style={{height: '250px', objectFit: 'cover'}}
      />
    </div>
  );
};

const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchProperty(id);
    }
  }, [id]);

  const fetchProperty = async (propertyId: string) => {
    try {
      setLoading(true);
      setError(null);
      const data = await getPropertyById(propertyId);
      setProperty(data);
    } catch (error) {
      console.error('Error fetching property:', error);
      setError(error instanceof Error ? error.message : 'Failed to fetch property');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{minHeight: '80vh'}}>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container my-4">
        <div className="alert alert-danger">
          <h4>Error</h4>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="container my-4">
        <div className="alert alert-warning">
          <h4>Not Found</h4>
          <p>Property not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <div className="row gy-4">
        <div className="col-lg-6">
          <SimpleImageGallery images={property.photos} />
          <div className="mt-3">
            <h1 className="display-6 fw-bold">{property.title}</h1>
            <p className="fs-4 text-primary fw-bold mt-2">
              ${property.price.toLocaleString()}
              {property.propertyType === 'rental' && '/month'}
            </p>
            <p className="text-muted">
              {property.address}, {property.city}, {property.state}
            </p>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title mb-3">Property Details</h5>
              <div className="row g-3">
                <div className="col-6">
                  <p className="text-muted mb-1">Property Type</p>
                  <p className="fw-semibold">
                    {property.propertyType === 'sale' ? 'For Sale' : 'For Rent'}
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted mb-1">Bedrooms</p>
                  <p className="fw-semibold">{property.bedrooms}</p>
                </div>
                <div className="col-6">
                  <p className="text-muted mb-1">Bathrooms</p>
                  <p className="fw-semibold">{property.bathrooms}</p>
                </div>
                <div className="col-6">
                  <p className="text-muted mb-1">Square Feet</p>
                  <p className="fw-semibold">{property.squareFeet.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-3">Location</h5>
              <div className="rounded overflow-hidden">
                <MapView
                  center={property.coordinates}
                  height="300px"
                />
              </div>
              <p className="mt-3 text-muted">
                {property.address}, {property.city}, {property.state}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h5 className="mb-3">Description</h5>
        <p className="text-muted">{property.description}</p>
      </div>
    </div>
  );
};

export default PropertyDetail;
