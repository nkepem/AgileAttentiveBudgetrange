import React from 'react';
import { FaThumbsUp, FaDownload, FaBookmark } from 'react-icons/fa';

export type CatalogueItemProps = {
  imageSrc?: string;
  name?: string;
  type?: string;
  author?: string;
  evaluation?: string;
  downloadLink?: string;
};



const CatalogueItemProps: React.FC<CatalogueItemProps> = ({
  imageSrc,
  name,
  type,
  author,
  evaluation,
  downloadLink,
}) => {
  return (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Main card image */}
      {imageSrc && (
        <img src={imageSrc} alt={name} className="w-full h-48 object-cover" />
      )}

      <div className="p-4">
        {/* Type of instrument */}
        <span className="text-xs text-gray-500">{type}</span>
        
        {/* Name of the instrument */}
        <h2 className="font-bold text-xl mb-1">{name}</h2>
        
        {/* Author information */}
        <p className="text-sm text-gray-600 mb-2">Author: {author}</p>
        
        {/* Evaluation section */}
        <div className="flex items-center mt-2">
          <FaThumbsUp className="text-blue-500 mr-1" />
          <span>{evaluation}</span>
        </div>
        
        {/* Action buttons */}
        <div className="flex justify-between items-center mt-4">
          <a
            href={downloadLink}
            className="text-blue-500 hover:underline"
          >
            <FaDownload />
          </a>
          <FaBookmark className="text-gray-600 hover:text-blue-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};



export default CatalogueItemProps;