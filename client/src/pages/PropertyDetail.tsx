/**
 * PropertyDetail.tsx
 * 
 * This component displays detailed information about a single property.
 * It fetches property data from the API based on the ID in the URL parameters,
 * handles loading and error states, and renders a complete property listing
 * with images, details, description and map location.
 */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MapView from '../components/MapView';

// Updated Property interface aligned with the backend model (PropertyFactory)
// This ensures our frontend and backend data structures are compatible
interface Property {
  property_id: number;
  title?: string; // For UI compatibility
  description?: string;
  price: number;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  property_type: 'house' | 'apartment' | 'condo' | 'townhouse';
  bedrooms?: number;
  bathrooms?: number;
  square_feet?: number;
  agent_id?: number;
  seller_id?: number;
  status: 'available' | 'sold' | 'pending';
  // Frontend specific properties that aren't directly in the backend model
  photos?: string[]; // Used for the image gallery
  coordinates?: {
    lat: number;
    lng: number;
  }; // Used for the map view
}

// Interface for property images which are stored separately in the backend
interface PropertyImage {
  image_id: number;
  property_id: number;
  image_url: string;
}

/**
 * Fetches property data from the API based on the property ID
 * 
 * This function:
 * 1. Retrieves the main property data
 * 2. Attempts to fetch related property images
 * 3. Transforms the backend data to match our frontend UI needs
 * 4. Provides fallback values for missing data
 * 
 * @param id - The property ID to fetch
 * @returns A Promise that resolves to the Property object
 */
const getPropertyById = async (id: string): Promise<Property> => {
  try {
    // Fetch the property details
    const response = await fetch(`/api/properties/${id}`);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch property');
    }
    
    const propertyData = await response.json();

    // Try to fetch property images, if available
    // We handle this in a separate try-catch to avoid failing the whole request if images can't be loaded
    let propertyImages: PropertyImage[] = [];
    try {
      const imagesResponse = await fetch(`/api/properties/${id}/images`);
      if (imagesResponse.ok) {
        propertyImages = await imagesResponse.json();
      }
    } catch (imageError) {
      console.warn('Error fetching property images:', imageError);
      // Continue with the property data even if images fail
    }
    
    // Transform the data to match our frontend needs
    // This helps bridge any gaps between the backend model and our UI requirements
    const transformedData: Property = {
      ...propertyData,
      title: propertyData.address, // Use address as title if not provided
      // Create a photos array from property images
      photos: propertyImages.length > 0 
        ? propertyImages.map(img => img.image_url) 
        : ['https://placehold.co/600x400?text=No+Image'],
      // Add default coordinates if not provided
      // We use NYC coordinates as a fallback - this will be improved with geocoding later
      coordinates: propertyData.coordinates || { lat: 40.7128, lng: -74.0060 }
    };
    
    return transformedData;
  } catch (error) {
    console.error('Error fetching property:', error);
    throw error;
  }
};

/**
 * Simple loading spinner component
 * Displays a centered loading indicator while data is being fetched
 */
const LoadingSpinner = () => (
  <div className="d-flex justify-content-center align-items-center">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

/**
 * Basic image gallery component that shows the first image
 * 
 * @param images - Array of image URLs to display
 * @returns A component showing either the first image or a placeholder
 */
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

/**
 * Main PropertyDetail component
 * 
 * Displays the complete details for a single property listing
 * Handles loading states, errors, and rendering the property information
 */
const PropertyDetail: React.FC = () => {
  // Extract the property ID from the URL parameters
  const { id } = useParams<{ id: string }>();
  
  // State management
  const [property, setProperty] = useState<Property | null>(null); // Stores the property data
  const [loading, setLoading] = useState(true); // Tracks if we're currently loading data
  const [error, setError] = useState<string | null>(null); // Stores any error messages

  /**
   * Effect hook to fetch property data when the component mounts
   * or when the property ID changes in the URL
   */
  useEffect(() => {
    if (id) {
      fetchProperty(id);
    }
  }, [id]);

  /**
   * Fetches property data and updates the component state
   * 
   * @param propertyId - The ID of the property to fetch
   */
  const fetchProperty = async (propertyId: string) => {
    try {
      setLoading(true); // Start loading
      setError(null); // Clear any previous errors
      const data = await getPropertyById(propertyId);
      setProperty(data); // Update property state with fetched data
    } catch (error) {
      console.error('Error fetching property:', error);
      // Store a user-friendly error message
      setError(error instanceof Error ? error.message : 'Failed to fetch property');
    } finally {
      setLoading(false); // End loading state regardless of outcome
    }
  };

  // Show loading state while fetching data
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{minHeight: '80vh'}}>
        <LoadingSpinner />
      </div>
    );
  }

  // Show error state if something went wrong
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

  // Show not found message if no property data was returned
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

  // Main render when property data is available
  return (
    <div className="container my-4">
      {/* Property header with image and basic info */}
      <div className="row gy-4">
        {/* Left column - Image and title section */}
        <div className="col-lg-6">
          <SimpleImageGallery images={property.photos || []} />
          <div className="mt-3">
            <h1 className="display-6 fw-bold">{property.title || property.address}</h1>
            <p className="fs-4 text-primary fw-bold mt-2">
              ${property.price.toLocaleString()}
              {/* Show /month for apartment type properties, which are typically rentals */}
              {property.property_type === 'apartment' && '/month'}
            </p>
            <p className="text-muted">
              {`${property.address}, ${property.city}, ${property.state} ${property.zip_code}`}
            </p>
          </div>
        </div>

        {/* Right column - Property details and map */}
        <div className="col-lg-6">
          {/* Property details card */}
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title mb-3">Property Details</h5>
              <div className="row g-3">
                {/* Property type */}
                <div className="col-6">
                  <p className="text-muted mb-1">Property Type</p>
                  <p className="fw-semibold">
                    {/* We consider apartments as rental properties */}
                    {property.property_type === 'apartment' ? 'For Rent' : 'For Sale'}
                  </p>
                </div>
                {/* Bedrooms */}
                <div className="col-6">
                  <p className="text-muted mb-1">Bedrooms</p>
                  <p className="fw-semibold">{property.bedrooms || 'N/A'}</p>
                </div>
                {/* Bathrooms */}
                <div className="col-6">
                  <p className="text-muted mb-1">Bathrooms</p>
                  <p className="fw-semibold">{property.bathrooms || 'N/A'}</p>
                </div>
                {/* Square footage */}
                <div className="col-6">
                  <p className="text-muted mb-1">Square Feet</p>
                  <p className="fw-semibold">
                    {property.square_feet ? property.square_feet.toLocaleString() : 'N/A'}
                  </p>
                </div>
                {/* Listing status */}
                <div className="col-6">
                  <p className="text-muted mb-1">Status</p>
                  <p className="fw-semibold">
                    {/* Capitalize the first letter of status for display */}
                    {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Location map card */}
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
                {`${property.address}, ${property.city}, ${property.state} ${property.zip_code}`}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Description section */}
      <div className="mt-4">
        <h5 className="mb-3">Description</h5>
        <p className="text-muted">{property.description || 'No description available'}</p>
      </div>
    </div>
  );
};

export default PropertyDetail;