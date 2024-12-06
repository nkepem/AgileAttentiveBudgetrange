import React, { useState } from 'react';
import dynamic from 'next/dynamic';

import RegionSelector from '@components/RegionSelector';
import Map from '@components/Map';


const ZonePage = () => {
  const [mapCenter, setMapCenter] = useState([0, 0]);
  const [mapZoom, setMapZoom] = useState(2);

  const handleCountryClick = (country) => {
    setMapCenter(country.coordinates);
    setMapZoom(6);
  };

  return (
    <div className="flex">
      <div className="w-1/4 p-4">
        <RegionSelector onCountryClick={handleCountryClick} />
      </div>
      <div className="w-3/4">
        <Map center={mapCenter} zoom={mapZoom} />
      </div>
    </div>
  );
};

export default ZonePage;