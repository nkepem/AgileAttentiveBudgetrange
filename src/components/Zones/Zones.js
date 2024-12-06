
// components/GalleryGrid.tsx

import React, { useEffect, useState, useRef }  from "react";
import styles from './Zones.module.scss';// Include any custom styles if needed
import Map from '@components/Map';
import  statesData  from 'src/data/us-state';
import nordAfrique from "../../data/nordafrique";






const DEFAULT_CENTER = [0.0, 20.0]; // Update default center for the map

// Coordonnées pour recentrer la carte sur des régions spécifiques
const REGIONS = {
  Cameroun: [7.3697, 12.3547],
  Afrique: [0.0, 20.0],
  Asie: [34.0479, 100.6197],
  Europe: [54.5260, 15.2551],
  Amérique: [10.0, -75.0],
};


const Zones = () => {
  const [geoJsonData, setGeoJsonData] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [info, setInfo] = useState({ name: '', density: '' });
  const mapRef = useRef(null);



  const getColor = (d) => {
    return d > 1000 ? '#800026' :
           d > 500  ? '#BD0026' :
           d > 200  ? '#E31A1C' :
           d > 100  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 20   ? '#FEB24C' :
           d > 10   ? '#FED976' :
                      '#FFEDA0';
  }

  const style = (feature) => {
    return {
      fillColor: getColor(feature.properties.density),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  }
  
  const highlightFeature = (e) => {
    var layer = e.target;

    layer.setStyle({
      weight: 5,
      color: '#666',
      dashArray: '',
      fillOpacity: 0.7
    });

    layer.bringToFront();

     // Update info state with properties of the hovered feature
     setInfo({
      name: layer.feature.properties.name,
      density: layer.feature.properties.density
    });

  }

  const resetHighlight = (e) => {
    const layer = e.target;
    layer.setStyle(style(layer.feature));
       // Reset info state when not hovering over a feature
       setInfo({ name: '', density: '' });
   
  }

  function zoomToFeature(e) {
    const map = e.target._map; // Accéder à l'instance de la carte
    map.fitBounds(e.target.getBounds()); // Ajuster la vue de la carte pour inclure les coordonnées de la zone
  }
 
  const handleEachFeature = (feature, layer) => {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: (e) => {
        setSelectedRegion(feature.properties);
        zoomToFeature(e); // Zoom sur la zone cliquée
      },
    });
    
    if (feature.properties && feature.properties.name) {
      layer.bindPopup(`
        <strong>${feature.properties.ville}, ${feature.properties.pays}</strong>
        <br/>
        Engagement: ${feature.properties.engagement}<br/>
        Zone: ${feature.properties.zone}
      `);
    }
  };

 
  
  return (
    <div className="border rounded-lg overflow-hidden p-6">
      {/* Section Title and Description */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">Zones Géographiques</h1>
        <p className="text-base-content">
          Parcourez les instruments juridiques auxquels le Cameroun est lié par zone
          géographique.
        </p>
      </div>
      <div className="border rounded-lg overflow-hidden h-96">
         <Map
                  className={styles.homeMap}
                  center={DEFAULT_CENTER}
                  zoom={4}
                  style={{ height: "100%", width: "100%" }}
                >
                  {({ TileLayer, GeoJSON, }) => (
                  <>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                  />
                  <GeoJSON
                    data={nordAfrique}
                    style={style}
                    onEachFeature={handleEachFeature}
                  />
                    {/* Include the custom control */}
           
       
                </>
                  )}
                </Map>
      </div>
      <div className="card-actions justify-end p-4">
          <button
            className="btn btn-primary"
            onClick={() => alert("Détails sur les zones géographiques !")}
          >
            Voir Détails
          </button>
          <div className="flex space-x-2">
            {Object.entries(REGIONS).map(([label, center]) => (
              <button
                key={label}
                className="btn btn-secondary"
                onClick={() => console.log(`Action pour ${label}`, center)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
    </div>
  );
}


export default Zones;