import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const regions = {
  'Amérique du Nord': ['CA', 'US', 'MX'],
  'Europe': ['FR', 'DE', 'GB', 'IT', 'ES'],
  'Afrique': ['ZA', 'EG', 'NG', 'KE', 'MA']
};

const countries = {
  'CA': { name: 'Canada', position: [56.130366, -106.346771] },
  'US': { name: 'États-Unis', position: [37.09024, -95.712891] },
  'MX': { name: 'Mexique', position: [23.634501, -102.552784] },
  // Ajouter d'autres pays ici
};

const WorldMap = ({ selectedCountry }) => (
  <MapContainer center={[20, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    {selectedCountry && (
      <Marker position={countries[selectedCountry].position}>
        <Popup>{countries[selectedCountry].name}</Popup>
      </Marker>
    )}
  </MapContainer>
);

const Engagement = () => {
  const [selectedRegion, setSelectedRegion] = useState('Amérique du Nord');
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <div className="flex h-screen">
      <div className="w-1/3 p-4 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Régions</h2>
        {Object.keys(regions).map(region => (
          <div key={region} className="mb-4">
            <h3 className="text-xl font-semibold mb-2">{region}</h3>
            <ul>
              {regions[region].map(countryCode => (
                <li key={countryCode}>
                  <button
                    className="btn btn-ghost"
                    onClick={() => setSelectedCountry(countryCode)}
                  >
                    {countries[countryCode].name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="w-1/3 p-4">
        <div className="h-full">
          <WorldMap selectedCountry={selectedCountry} />
        </div>
      </div>
      <div className="w-1/3 p-4">
        {selectedCountry && (
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{countries[selectedCountry].name}</h2>
              <p>Code: {selectedCountry}</p>
              <p>Latitude: {countries[selectedCountry].position[0]}</p>
              <p>Longitude: {countries[selectedCountry].position[1]}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Engagement;