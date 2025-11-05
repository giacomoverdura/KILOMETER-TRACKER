import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapView = () => {
  useEffect(() => {
    const map = L.map("map").setView([14.5995, 120.9842], 13); 

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    // Marker
    L.marker([14.5995, 120.9842])
      .addTo(map)
      .bindPopup("<b>Hello!</b><br>This is Manila.")
      .openPopup();

    // Clean up map on unmount (important for React)
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      id="map"
      style={{
        height: "500px",
        width: "100%",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    />
  );
};

export default MapView;
