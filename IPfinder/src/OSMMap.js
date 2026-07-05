import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function OSMMap({ lat = 0, lon = 0 }) {
  return (
    <MapContainer
      center={[lat, lon]}
      zoom={10}
      style={{ width: "100%", height: "400px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap"
      />
      <Marker position={[lat, lon]} icon={markerIcon}>
        <Popup>IP Location</Popup>
      </Marker>
    </MapContainer>
  );
}

export default OSMMap;
