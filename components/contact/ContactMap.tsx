"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* Next.js empaqueta los assets de Leaflet con rutas rotas, así que los PNG del
   marcador se copiaron a `public/leaflet`. Antes se apuntaba al CDN de unpkg:
   servirlos desde acá evita que el marcador dependa de un tercero y que el
   navegador de cada visitante haga un pedido a unpkg. */
const markerIcon = L.icon({
  iconUrl: "/leaflet/marker-icon.png",
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  shadowUrl: "/leaflet/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const TEGUCIGALPA: [number, number] = [14.0723, -87.1921];

export default function ContactMap() {
  return (
    <MapContainer
      center={TEGUCIGALPA}
      zoom={13}
      scrollWheelZoom={false}
      className="w-full h-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={TEGUCIGALPA} icon={markerIcon}>
        <Popup>Tegucigalpa, Honduras</Popup>
      </Marker>
    </MapContainer>
  );
}
