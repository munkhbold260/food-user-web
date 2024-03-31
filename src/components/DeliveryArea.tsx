import React from "react";
import "leaflet/dist/leaflet.css";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Stack } from "@mui/material";

type Props = {};

const DeliveryArea = (props: Props) => {
  return (
    <Stack margin={"auto"} style={{ width: "1200px", height: "600px" }}>
      <MapContainer
        center={[47.9221, 106.9155, 10]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[47.9221, 106.9155]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Stack>
  );
};
export default DeliveryArea;
