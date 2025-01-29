import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

const MapComponent = () => {
  const [coordinates, setCoordinates] = useState([]);

  const customIcon = L.icon({
    iconUrl: 'https://static.thenounproject.com/png/331788-200.png', // Replace with the path to your custom icon
    iconSize: [25, 35], // Size of the icon
    iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
    popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
    //shadowUrl: 'path/to/marker-shadow.png', // Optional shadow image
    //shadowSize: [41, 41], // Size of the shadow
    //shadowAnchor: [12, 41] // Point of the shadow which will correspond to marker's location
  });

  useEffect(() => {
    // Dummy data for testing
    const dummyData = [
      [51.505, -0.09],
      [51.51, -0.1],
      [51.51, -0.12]
    ];
    setCoordinates(dummyData);

    // Uncomment the following lines to fetch data from the backend
    // axios.get('/api/sightings')
    //   .then(response => {
    //     setCoordinates(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data:', error);
    //   });
  }, []);

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100vh', width: '100vh' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {coordinates.length > 0 && (
        <>
          <Polyline positions={coordinates} color="red" />
          {coordinates.map((position, idx) => (
            <Marker key={idx} position={position} icon={customIcon}>
              <Popup>
                Coordinate: {position[0]}, {position[1]}
              </Popup>
            </Marker>
          ))}
        </>
      )}
    </MapContainer>
  );
};

export default MapComponent;