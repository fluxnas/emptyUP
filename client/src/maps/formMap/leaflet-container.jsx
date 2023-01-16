// import './leaflet-container.css';
import { MapContainer, TileLayer } from 'react-leaflet';

export const LeafletContainer = ({ children, zoom, center }) => { 
    return <MapContainer className="h-80 w-full leaflet-map relative z-0" zoom={zoom} center={center}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       {children}
    </MapContainer>;
}