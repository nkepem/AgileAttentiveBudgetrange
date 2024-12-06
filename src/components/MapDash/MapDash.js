// MapDash.js
import dynamic from "next/dynamic";
import styles from "./MapDash.module.scss";

const DynamicMap = dynamic(() => import("./DynamicMapDash"), {
  ssr: false, // Ensure this component only loads on the client
});

// Default width and height based on the golden ratio
const DEFAULT_WIDTH = 800;
const DEFAULT_HEIGHT = DEFAULT_WIDTH / 1.618;

const MapDash = ({ width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT, ...props }) => {
  return (
    <div
      className={styles.mapDashContainer}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        maxWidth: "100%", // Ensure responsive scaling
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <DynamicMap {...props} width={width} height={height} />
    </div>
  );
};

export default MapDash;
