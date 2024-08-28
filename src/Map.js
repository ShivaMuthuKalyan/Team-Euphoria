import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';

// Custom icon for the marker (optional)
const customIcon = new L.Icon({
  iconUrl: 'https://parspng.com/wp-content/uploads/2023/03/GPSpng.parspng.com_.png',
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
  shadowSize: [50, 64],
  shadowAnchor: [4, 62],
});

function Map() {
  // Array of locations (latitude, longitude)
  const initialLocations = [
    { lat: 10.93893, lon: 76.95210 },
    { lat: 12.9716, lon: 77.5946 }, // Bengaluru
    { lat: 19.0760, lon: 72.8777 }, // Mumbai
  ];

  // State to hold locations and their addresses
  const [locations, setLocations] = useState(
    initialLocations.map((loc) => ({ ...loc, address: 'Loading address...' }))
  );

  // Function to fetch addresses for all locations
  useEffect(() => {
    const fetchAddresses = async () => {
      const updatedLocations = await Promise.all(
        locations.map(async (loc) => {
          try {
            const response = await axios.get(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${loc.lat}&lon=${loc.lon}`
            );
            const data = response.data;
            return { ...loc, address: data.display_name || 'Address not found' };
          } catch (error) {
            console.error('Error fetching address for location:', loc, error);
            return { ...loc, address: 'Failed to fetch address' };
          }
        })
      );
      setLocations(updatedLocations);
    };

    fetchAddresses();
  }, []);

  return (
    <div>
    <br/><br/>
      <center><h1>Map</h1></center>
      <br/><br/><br/>
      <MapContainer center={[10.93893, 76.95210]} zoom={5} style={{ height: '500px', width: '100%' }}>
        {/* TileLayer to display OpenStreetMap tiles */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Map over locations and place markers with popups */}
        {locations.map((loc, idx) => (
          <Marker key={idx} position={[loc.lat, loc.lon]} icon={customIcon}>
            <Popup>
              <strong>Address:</strong> <br />
              {loc.address}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
