const BuildingPage =() => {
	return(
		<div> BUILDINGPAGE 
		</div>
	)
}

export default BuildingPage
// export const AddMarker = ({ setPosition }) => {
//     const { position } = useGeoLocation();
//     console.log(position)
//     const { userLocation } = useUserDefaultLocation(position);
//     console.log(userLocation)

//     const markerRef = useRef(null);
//     const map = useMapEvents({
//         click(e) {
//             markerRef.current?.setLatLng(e.latlng);
//             setPosition(e.latlng)
//         }
//     });

//     useEffect(() => {
//         map.setView(userLocation);
//     }, [userLocation]);

//     const eventHandlers = useMemo(
//         () => ({
//             dragend() {
//                 const marker = markerRef.current
//                 if (marker != null) {
//                     setPosition(marker.getLatLng())
//                 }
//             },
//         }),
//         [],
//     )

//     const userIcon = L.icon({
//         iconUrl: markerIcon,
//         iconSize: [22, 38],
//         iconAnchor: [11, 19],
//     });
//     return <div>
//         <Marker position={userLocation} icon={userIcon} draggable={true} eventHandlers={eventHandlers} ref={markerRef} />
//     </div>;
// }

// export default AddMarker