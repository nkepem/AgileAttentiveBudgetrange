import React from "react";
import CatalogueSearch from "./CatalogueSearch";
import CategoryFilter from "./CatalogueFilter";
import CatalogueItemProps from "./CatalogueItemCard";

const instruments = [
    {
      imageSrc: '/path/to/image1.jpg',
      name: 'MOU Agreement',
      type: 'MOU',
      author: 'John Doe',
      evaluation: '4.5/5',
      downloadLink: '/downloads/mou-agreement.pdf',
    },
    {
      imageSrc: '/path/to/image2.jpg',
      name: 'Trade Agreement',
      type: 'Traité',
      author: 'Jane Smith',
      evaluation: '4.7/5',
      downloadLink: '/downloads/trade-agreement.pdf',
    },
  ];
  
 

const Catalogue = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {instruments.map((instrument, index) => (
          <CatalogueItemProps key={index} {...instrument} />
        ))}
      </div>
    );
}
export default Catalogue;