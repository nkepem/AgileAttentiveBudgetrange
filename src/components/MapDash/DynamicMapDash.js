// DynamicMap.js
import { useEffect } from "react";
import Leaflet from "leaflet";
import * as ReactLeaflet from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./MapDash.module.scss";
import dynamic from "next/dynamic";

const { MapContainer, useMap } = ReactLeaflet;

// Dynamic imports for Leaflet components
export const TileLayer = dynamic(
    () => import("react-leaflet").then((m) => m.TileLayer),
    { ssr: false }
  );
  
  export const ZoomControl = dynamic(
    () => import("react-leaflet").then((m) => m.ZoomControl),
    { ssr: false }
  );
  
 // Legend Component
const MapLegend = () => {
  const map = useMap();

  useEffect(() => {
    const legend = Leaflet.control({ position: "bottomright" });

    legend.onAdd = () => {
      const div = Leaflet.DomUtil.create("div", "legend");
      div.innerHTML = `
        <div style="background: white; padding: 10px; border-radius: 5px; box-shadow: 0 2px 6px rgba(0,0,0,0.3);">
          <h4>Legend</h4>
          <div><span style="background: green; width: 12px; height: 12px; display: inline-block; margin-right: 5px;"></span> Financial Engagement</div>
          <div><span style="background: red; width: 12px; height: 12px; display: inline-block; margin-right: 5px;"></span> No Engagement</div>
        </div>
      `;
      return div;
    };

    legend.addTo(map);
    return () => {
      map.removeControl(legend);
    };
  }, [map]);

  return null;
};

const getPopupContent = (properties) => {
  const { name, nombre_daccords, engagement_financier, type_d_instruments } =
    properties;
  return `
    <div>
      <strong>${name}</strong><br />
      Agreements: ${nombre_daccords}<br />
      Engagement: ${
        engagement_financier === 'yes'
          ? 'Financial Commitment'
          : 'No Commitment'
      }<br />
      Instrument Type: ${type_d_instruments}
    </div>
  `;
};

// GeoJSON Style Function
const geoJsonStyle = (feature) => {
  return {
    color: feature.properties.engagement_financier === 'yes' ? 'green' : 'red',
    weight: 2,
    fillOpacity: 0.5,
  };
};


// Updates the map center and zoom dynamically
const MapUpdater = ({ center, zoom }) => {
  const map = useMap();

  useEffect(() => {
    if (center && zoom) {
      map.setView(center, zoom);
    }
  }, [center, zoom, map]);

  return null; // Does not render any visible UI
};

// Main map component
const Map = ({
  children,
  className,
  center,
  zoom,
  width,
  height,
  forwardedRef,
  ...rest
}) => {
  let mapClassName = styles.map;

  if (className) {
    mapClassName = `${mapClassName} ${className}`;
  }

  useEffect(() => {
    // Customize Leaflet's default marker icons
    (async function init() {
      delete Leaflet.Icon.Default.prototype._getIconUrl;
      Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: "/leaflet/images/marker-icon-2x.png",
        iconUrl: "/leaflet/images/marker-icon.png",
        shadowUrl: "/leaflet/images/marker-shadow.png",
      });
    })();
  }, []);

  return (
    <MapContainer
      className={mapClassName}
      style={{ width: `${width}px`, height: `${height}px` }}
      center={center}
      zoom={zoom}
      ref={forwardedRef}
      {...rest}
    >
      <MapUpdater center={center} zoom={zoom} />
      {children(ReactLeaflet, Leaflet)}
      <MapLegend />
    </MapContainer>
  );
};

export default Map;
