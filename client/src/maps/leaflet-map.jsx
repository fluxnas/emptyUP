import markerIcon from "leaflet/dist/images/marker-icon.png";
import { useNavigate } from "react-router-dom";
import { Marker, useMap, Popup } from "react-leaflet";
import useGeoLocation from "../hooks/geoLocationHook";
import useUserDefaultLocation from "../hooks/userDefaultPositionHook";
import { useEffect } from "react";
import L from "leaflet";

export const LeafletMap = ({ buildings }) => {
  const { position } = useGeoLocation();
  const { userLocation } = useUserDefaultLocation(position);
  const navigate = useNavigate();

  const map = useMap();

  useEffect(() => {
    map.setView(userLocation);
  }, [userLocation]);

  const userIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [22, 38],
    iconAnchor: [11, 19],
  });

  return (
    <div>
      {buildings.map((building) => (
        <Marker
          position={{
            lat: building.lat,
            lng: building.lon,
            zoom: 13,
          }}
          icon={userIcon}
        >
          <Popup>
            <img src={building.initial_image}></img>
            <p>City: {building.city}</p>
            <p>Zipcode: {building.zipcode}</p>
            <p>Address: {building.adress}</p>
            <p>Type: {building.type}</p>
          </Popup>
        </Marker>
      ))}
    </div>
  );
};
