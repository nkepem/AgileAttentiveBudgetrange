import RegionCollapse from "@components/RegionCollapse";
import regions from "../../data/regions";
import countries from "../../data/countries";

const RegionSelector = ({ onCountryClick }) => {

  
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
    <h1 className="text-2xl font-bold mb-4">Choisissez un Pays</h1>
    <RegionCollapse
      regions={regions}
      countries={countries}
      onCountryClick={onCountryClick}
         />
  </div>
  );
};

export default RegionSelector;