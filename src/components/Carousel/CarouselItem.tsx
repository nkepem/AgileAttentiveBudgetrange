import React from 'react';
import dynamic from 'next/dynamic';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { LatLngTuple } from 'leaflet'; // Import LatLngTuple
import "leaflet/dist/leaflet.css";
import Link from 'next/link';


const DEFAULT_CENTER: LatLngTuple = [3.8667, 11.5167]
const MapWithNoSSR = dynamic(() => import('./MapCarousel'), {
  ssr: false,
  loading: () => <p>Loading map...</p>
});

export type LegalInstrumentProps = {

  name?: string;
  acronym?: string;
  logo?: string;
  type?: string;
  nbre_accords?: number;
  comments?: string;
  country?: string;
  city_country?: string;
  financial_commitment?: string;
  continent?: string;
  geoPositionCity?: [number, number];
  geoCoordinatesCountry?: [number, number];
}


const LegalInstrumentCard: React.FC<LegalInstrumentProps> = ({
    name,
  acronym,
  logo,
  type,
  nbre_accords,
  comments,
  country,
  city_country,
  financial_commitment,
  continent,
  geoPositionCity,
  geoCoordinatesCountry
}) => {

  return (
    <div className="card bg-base-100 shadow-xl grid grid-cols-1 lg:grid-cols-2">
      {/* First Column: Profile and Content */}
      <div className="card-body p-6">
        {/* Profile Section */}
        <div className="flex items-center mb-4">
          {logo && (
            <img
              src={logo}
              alt={acronym}
              className="w-12 h-12 rounded-full border border-gray-300 mr-4"
            />
          )}
          <div>
            {name && <h2 className="text-lg font-semibold">{name}</h2>}
            {acronym && <p className="text-sm text-gray-500">{acronym}</p>}
          </div>
        </div>

        {/* Card Content */}
        <div className="space-y-4">
  {/* Acronym */}
  {acronym && <h2 className="card-title text-2xl font-bold text-blue-600">{acronym}</h2>}

  {/* Type */}
  {type && <p className="text-gray-700 text-lg font-medium">{type}</p>}

  {/* Details */}
  <div className="text-sm text-gray-500 space-y-1">
    <p>
      <span className="font-semibold text-gray-700">Country:</span> {country}
    </p>
    <p>
      <span className="font-semibold text-gray-700">City:</span> {city_country}
    </p>
    <p>
      <span className="font-semibold text-gray-700">Number of Accords:</span> {nbre_accords}
    </p>
    <div className="mt-2">
      {/* Financial Commitment */}
      <span className="font-semibold text-gray-700">Financial Commitment:</span>
      <span
        className={`ml-2 px-2 py-1 text-sm font-medium rounded ${
          financial_commitment =="yes" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
        }`}
      >
        {financial_commitment =="yes" ? "Yes" : "No"}
      </span>
    </div>
  </div>
</div>


        {/* Card Actions */}
        <div className="card-actions mt-4">
          {acronym && (
            <button className="btn btn-outline btn-secondary hover:bg-blue-500 hover:text-white transition duration-300">
              {acronym}
            </button>
          )}
        </div>
      </div>

      {/* Second Column: Map */}
      <div className="flex items-center justify-center p-6">
        {geoPositionCity ? (
          <MapWithNoSSR
            center={geoPositionCity || DEFAULT_CENTER}
            zoom={12}
            markerPosition={geoPositionCity || DEFAULT_CENTER}
            popupContent={
              <div className="p-2 text-sm text-gray-700">
                <h3 className="text-lg font-bold text-blue-600">
                  {city_country || "Unknown Location"}
                </h3>
                <p className="mt-1">
                  <strong>Financial Commitment:</strong>{" "}
                  {financial_commitment === "yes" ? "Yes" : "No"}
                </p>
                <div className="mt-1 flex items-center space-x-2">
                  <Link href="/dashboard">
                    <button className="btn btn-xs btn-secondary">Explore</button>
                  </Link>
                </div>
              </div>
            }
          />
        ) : (
          <p className="text-gray-500">No location data available</p>
        )}
      </div>
    </div>
  );
};

export default LegalInstrumentCard;





