import { GreenStar } from "./logos/GreenStar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Stack, Typography } from "@mui/material";

const DeliveryArea = () => {
  return (
    <Stack margin={"auto"} width={"1200px"} height={"600px"}>
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
          <LocationOnIcon />
        </Marker>
      </MapContainer>
      <Stack direction={"row"}>
        <GreenStar />
        <Typography>Хүргэлтийн бүс дэх хаягууд</Typography>
        <LocationOnIcon />
      </Stack>
    </Stack>
  );
};

export default DeliveryArea;
