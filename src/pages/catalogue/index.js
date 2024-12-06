
import React, { useState } from 'react';
import LayoutThree from '@components/LayoutThree';
import CatalogueSearch from '@components/Catalogue/CatalogueSearch';
import CatalogueFilter from '@components/Catalogue/CatalogueFilter';
import Catalogue from '@components/Catalogue';

export default function catalogue() {

  const leftContent = (
    <CatalogueFilter />
  );

  const mainContent = (
    <div>
      <h1 className="text-3xl font-bold">Welcome to Our Website</h1>
      <Catalogue />
    </div>
  );

  const rightContent = (
    <CatalogueSearch />
  );
    
    return (
      <LayoutThree
      leftContent={leftContent}
      mainContent={mainContent}
      rightContent={rightContent}
      className="custom-layout"
    />
    )
  }