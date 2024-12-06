import React  from "react";

const CatalogueSearch = () => {
    return (
        <div className="mt-6 flex justify-center items-center">
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Recherche..."
              className="input input-bordered w-full pr-12" // Ajout d'un padding à droite pour l'icône
            />
            <button className="absolute inset-y-0 right-0 flex items-center pr-3 btn btn-secondary">
              🔍
            </button>
          </div>
        </div>
    );
}

export default CatalogueSearch;