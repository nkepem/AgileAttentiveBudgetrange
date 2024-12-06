import React from 'react';
import Image from 'next/image'
export type CardItemProps = {
  imageSrc?: string;
  name?: string;
  role?: string;
  cardImageSrc?: string;
  cardTitle?: string;
  cardContent?: string;
};

const Card: React.FC<CardItemProps> = ({
  imageSrc,
  name,
  role,
  cardImageSrc,
  cardTitle,
  cardContent,
}) => {
  return (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Main card image */}
      {cardImageSrc && <img src={cardImageSrc} alt={cardTitle} className="w-full h-40 object-cover" />}

      <div className="p-4">
        {/* Name and role */}
        <div className="flex items-center mb-4">
          {imageSrc && <img src={imageSrc} alt={name} className="w-12 h-12 rounded-full mr-4" />}
          <div>
            {name && <h2 className="text-lg font-semibold">{name}</h2>}
            {role && <p className="text-sm text-gray-500">{role}</p>}
          </div>
        </div>

        {/* Card content */}
        {cardTitle && <h3 className="text-xl font-bold mb-2">{cardTitle}</h3>}
        {cardContent && <p className="text-gray-600">{cardContent}</p>}
      </div>
    </div>
  );
};

export default Card;
