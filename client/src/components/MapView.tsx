import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import { useMemo } from 'react';

interface MapViewProps {
  center?: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  width?: string;
  height?: string;
}

const MapView: React.FC<MapViewProps> = ({
  center: propCenter,
  zoom = 12,
  width = '100%',
  height = '400px'
}) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: (import.meta as any).env.VITE_GOOGLE_MAPS_API_KEY || ''  });

  const center = useMemo(() => 
    propCenter || { lat: 40.7128, lng: -74.0060 }, // Default to New York City but can be changed
    [propCenter]
  );

  const containerStyle = useMemo(() => ({
    width,
    height,
    borderRadius: '0.5rem',
    overflow: 'hidden'
  }), [width, height]);

  if (!isLoaded) {
    return (
      <div 
        style={containerStyle}
        className="bg-gray-100 flex items-center justify-center"
      >
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      options={{
        disableDefaultUI: false,
        zoomControl: true,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }],
          },
        ],
      }}
    >
      <Marker
        position={center}
        icon={{
          path: google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: '#8B5CF6',
          fillOpacity: 1,
          strokeColor: '#6D28D9',
          strokeWeight: 2,
        }}
      />
    </GoogleMap>
  );
};

export default MapView;