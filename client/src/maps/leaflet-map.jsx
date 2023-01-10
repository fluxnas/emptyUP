import markerIcon from "leaflet/dist/images/marker-icon.png"
import { Marker, useMap } from 'react-leaflet';
import useGeoLocation from '../hooks/geoLocationHook';
import useUserDefaultLocation from '../hooks/userDefaultPositionHook';
import { useEffect } from 'react';
import L from 'leaflet';

export const LeafletMap = () => {
    const { position } = useGeoLocation();
    const { userLocation } = useUserDefaultLocation(position);

    const map = useMap();
       
    useEffect(() => {
        map.setView(userLocation);
    }, [userLocation]);

    const userIcon = L.icon({
        iconUrl: markerIcon,
        iconSize: [22, 38],
        iconAnchor: [11, 19],
    });
    return <div>
        <Marker position={userLocation} icon={userIcon}>
        </Marker>
    </div>;
}