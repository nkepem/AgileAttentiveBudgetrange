import React from "react";
import styles from './RegionCollapse.module.scss';

const RegionCollapse = ({ regions, countries, onCountryClick, onRegionSelect }) => {
  return (
    <div className="space-y-2">
      {regions.map((region) => (
        <div key={region} className="collapse collapse-arrow bg-gray-100 rounded-lg shadow-md">
          <input type="radio" name="my-accordion"  defaultChecked/>
          <div 
          className="collapse-title text-lg font-semibold text-gray-800 px-4 py-3 cursor-pointer hover:bg-gray-200 transition-all duration-200"
          onClick={() => onRegionSelect(region)}>
            {region}
          </div>
          <div className="collapse-content px-4 py-2 max-h-0   transition-max-height duration-300 ease-in-out">
            {countries[region].map((country) => (
              <button
                key={country.name}
                className="block mb-2 text-blue-600 hover:underline hover:text-blue-800 transition-all duration-150"
                onClick={() => onCountryClick(country)}
              >
                {country.name}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default RegionCollapse;

