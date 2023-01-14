import ReactMapGl, { Marker } from "react-map-gl";
import Image from "next/image";
type Props = {};

const Map = (props: Props) => {
  return (
    <ReactMapGl
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      initialViewState={{
        longitude: -96.615021,
        latitude: 33.19796,
        zoom: 7.15,
      }}
      style={{ width: "120%", height: "110%" }}
      mapStyle='mapbox://styles/mapbox/dark-v11'>
      <Marker latitude={33.162703} longitude={-96.644325}>
        <Image src='/memoji.png' alt='Memoji Avatar' width={100} height={150} />
      </Marker>
    </ReactMapGl>
  );
};

export default Map;
