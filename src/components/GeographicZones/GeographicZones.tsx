'use client';
// components/GeographicZones.tsx
const GeographicZones = () => {
    return (
      <section
      id="geographic-zones"
      className="py-16 bg-primary text-white"
      style={{
        backgroundImage: "url(/organizations-bg.jpg)", // Remplacez par le chemin correct de votre image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold mb-4 text-secondary">Zones Géographiques</h2>
        <p className="mb-6">
          Explorez les différentes zones géographiques et découvrez les caractéristiques uniques de chaque région. Utilisez le champ de recherche pour trouver des informations spécifiques sur les zones qui vous intéressent.
        </p>
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
      </div>
    </section>
    );
  };
  
  export default GeographicZones;
  