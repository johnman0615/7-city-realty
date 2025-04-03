import React from "react";

interface MapViewProps {
  center: { lat: number; lng: number };
  zoom?: number;
  width?: string;
  height?: string;
}

const MapView: React.FC<MapViewProps> = ({
  center,
 
  width = "100%",
  height = "400px",
}) => {
  return (
    <div
      style={{
        width,
        height,
        backgroundColor: "#e0e0e0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>Map Placeholder (Lat: {center.lat}, Lng: {center.lng})</p>
    </div>
  );
};

export default MapView;