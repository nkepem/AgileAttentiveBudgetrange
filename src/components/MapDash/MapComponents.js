import dynamic from "next/dynamic";

export const LayersControl = dynamic(() => import("react-leaflet").then((m) => m.LayersControl), { ssr: false });
export const Marker = dynamic(() => import("react-leaflet").then((m) => m.Marker), { ssr: false });
export const Popup = dynamic(() => import("react-leaflet").then((m) => m.Popup), { ssr: false });
export const Circle = dynamic(() => import("react-leaflet").then((m) => m.Circle), { ssr: false });
export const LayerGroup = dynamic(() => import("react-leaflet").then((m) => m.LayerGroup), { ssr: false });
export const FeatureGroup = dynamic(() => import("react-leaflet").then((m) => m.FeatureGroup), { ssr: false });
export const Rectangle = dynamic(() => import("react-leaflet").then((m) => m.Rectangle), { ssr: false });
// Dynamic imports for Leaflet components
export const TileLayer = dynamic(
    () => import("react-leaflet").then((m) => m.TileLayer),
    { ssr: false }
  );
  
  export const ZoomControl = dynamic(
    () => import("react-leaflet").then((m) => m.ZoomControl),
    { ssr: false }
  );
  