import ReactMapGl, { Marker } from "react-map-gl";
import Image from "next/image";
import useTheme from "../hooks/useTheme";
import { useEffect, useState } from "react";

const Map = () => {
  const [mapStyles, setMapStyles] = useState<string>("");
  const { isDarkMode } = useTheme();

  useEffect(() => {
    setMapStyles(
      isDarkMode
        ? "mapbox://styles/mapbox/dark-v11"
        : "mapbox://styles/mapbox/light-v11"
    );
  }, [isDarkMode]);

  return (
    <ReactMapGl
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      initialViewState={{
        longitude: -96.615021,
        latitude: 33.19796,
        zoom: 7.15,
      }}
      style={{ width: "120%", height: "115%" }}
      mapStyle={mapStyles}
      minZoom={4}
      maxZoom={8}>
      <Marker latitude={33.162703} longitude={-96.644325}>
        <Image src='/memoji.png' alt='Memoji Avatar' width={100} height={150} />
      </Marker>
    </ReactMapGl>
  );
};

export default Map;
