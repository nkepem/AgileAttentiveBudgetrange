import React from 'react';

const CategoryFilter = () => {
  const categories = [
    'Accord',
    'MOU',
    'Charte',
    'Traite',
    'Decret',
    'Decision',
    'Lettres',
    'Statuts',
    'Lois',
    'Protocoles',
    'Acte',
    'Reglement',
    'Conventions',
  ];

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
    
      <h2 className="text-2xl font-bold text-secondary mb-4">Categories</h2>
      <div className="divider"></div>
   
      <div className="space-y-3">
        {categories.map((category, index) => (
          <div className="form-control" key={index}>
            <label className="label cursor-pointer">
              <span className="label-text">{category}</span>
              <input
                type="radio"
                name="category"
                className={`radio checked:bg-secondary`}
              />
            </label>
          </div>
        ))}
      </div>

      {/* Division */}
      <div className="divider"></div>
    </div>
  );
};

export default CategoryFilter;
