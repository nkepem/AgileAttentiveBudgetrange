
// components/GalleryGrid.tsx

import React, { useEffect}  from "react";
import styles from '@styles/Home.module.scss';// Include any custom styles if needed
import Map from '@components/Map';
import zonegeos from "src/data/zonegeo";
import instruments from "src/data/instruments";

const DEFAULT_CENTER = [11.5167, 3.8667]; // Update default center for the map

const Services = () => {
  return (
    <div className="p-6">
      {/* Section Title and Description */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">Organismes</h1>
        <p className="text-base-content">
         Decouvrez les instruments juridiques auxquels le Cameroun est lié.
        </p>
      </div>

      {/* Grid for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {instruments.map((card, index) => (
          <div
            key={index}
            className="card bg-base-200 shadow-xl flex flex-col"
            style={{ height: "400px", width: "100%" }}
          >
            {/* Card Body */}
            <div className="card-body flex-1 p-4">
              <h2 className="card-title text-primary">{card.name}</h2>
              <p className="text-base-content mb-4">{card.description}</p>
              {/* Map Section */}
              <div className="border rounded-lg overflow-hidden h-56">
                <Map
                  className={styles.homeMap}
                  center={card.position || DEFAULT_CENTER}
                  zoom={12}
                  style={{ height: "100%", width: "100%" }}
                >
                  {({ TileLayer, Marker, Popup, GeoJson, Pane}) => (
                    <>
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                      />
                      <Marker position={card.position}>
                        <Popup>
                          Location: {card.name}. <br /> Easily customizable.
                        </Popup>
                      </Marker>
                    </>
                  )}
                </Map>
              </div>
            </div>
            {/* Card Actions */}
            <div className="card-actions justify-end p-4">
                            <button className="btn btn-primary">Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;