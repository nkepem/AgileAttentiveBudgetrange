import Head from 'next/head';
import React, { useState, useRef } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import styles from './LayoutTwo.module.scss';
import Map from '@components/Map';
import RegionSelector from '../RegionSelector/RegionSelector';
import countries from '../../data/countries';



const DEFAULT_CENTER = [38.907132, -77.036546];
const DEFAULT_ZOOM = 4;

const LayoutTwo = ({ children, className, ...rest }) => {
  const [mapCenter, setMapCenter] = useState(DEFAULT_CENTER);
  const [mapZoom, setMapZoom] = useState(DEFAULT_ZOOM);



  const handleCountryClick = (country) => {
    setMapCenter(country.coordinates);
   
    setMapZoom(5); // Adjust zoom level as needed
    console.log(`Centrer la carte sur ${country.name} aux coordonnées ${country.coordinates}`);
  };
  
  return (
    <div className={styles.layout}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.content}>
        {/* Sidebar (Left Column) */}
        <aside >
        <RegionSelector onCountryClick={handleCountryClick} 
         />
         
        </aside>

        {/* Main Content (Center Column) */}
        <main className={`${styles.main} ${className}`} {...rest}>
        <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <h3 className="card-title">Interactive Map</h3>
              <div className="border rounded-lg overflow-hidden h-98">
                <Map
                  center={mapCenter}
                  zoom={mapZoom}
                  style={{ height: "100%", width: "100%" }}
                >
                  {({ TileLayer, Marker, Popup, GeoJSON }) => (
                    <>
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
                      />
                      <Marker position={mapCenter}>
                        <Popup>
                          Location: <br /> Easily customizable.
                        </Popup>
                      </Marker>
                      {/* Add GeoJSON for interactive zones if needed */}
                    
                    </>
                  )}
                </Map>
              </div>
            </div>
          </div>
        <br />
          {children}
        </main>

        {/* Additional Content (Right Column) */}
        <aside className={styles.additionalContent}>
          <h2>Additional Content</h2>
          <p>Put additional information here.</p>
        </aside>
      </div>
      <Footer />
    </div>
  );
};


export default LayoutTwo;
