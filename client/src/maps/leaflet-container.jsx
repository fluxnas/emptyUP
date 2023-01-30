//import './leaflet-container.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import useGeoLocation from '../hooks/geoLocationHook';
import useUserDefaultLocation from '../hooks/userDefaultPositionHook';

export const LeafletContainer = ({ children }) => { 
    const { position } = useGeoLocation();
    const { userLocation } = useUserDefaultLocation(position);

    return <MapContainer className="h-screen w-full z-0 leaflet-map relative" style={{ height: "calc(80vh)" }} zoom={userLocation.zoom} center={userLocation}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       {children}
    </MapContainer>;
}