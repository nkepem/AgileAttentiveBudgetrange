import React from 'react';
import LegalInstrumentCard from './CarouselItem'; // Assuming Card component is in the same folder
import legalInstruments  from '../../data/instruments_juridiques';

const Carousel =() => {
       
      return (
        <div
          className="carousel w-full h-screen bg-cover bg-center"
          style={{
            backgroundImage: 'url(/organizations-bg.jpg)', // Replace with your image path
          }}
        >
          {legalInstruments.map((instrument, index) => (
            <div
              id={`slide${index + 1}`}
              key={index}
              className="carousel-item relative w-full flex justify-center items-center"
            >
              {/* Use the Card component to render each card */}
              <LegalInstrumentCard 
                name={instrument.denomination}
                acronym={instrument.sigle}
                logo={instrument.logo}
                type={instrument.nature}
                nbre_accords={instrument.nbre_accords}
                comments={instrument.observations}
                country={instrument.pays}
                city_country={instrument.ville_pays}
                financial_commitment={instrument.engagement_financier}
                continent={instrument.continent}
                geoPositionCity={instrument.position_geo_ville as [number, number]}
                geoCoordinatesCountry={instrument.coordoonees_geo_pays as [number, number]}

              />
    
              {/* Navigation buttons */}
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a
                  href={`#slide${index === 0 ? legalInstruments.length : index}`}
                  className="btn btn-circle btn-primary"
                >
                  ❮
                </a>
                <a
                  href={`#slide${(index + 1) % legalInstruments.length + 1}`}
                  className="btn btn-circle btn-primary"
                >
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div>
      );
    }
export default Carousel;
