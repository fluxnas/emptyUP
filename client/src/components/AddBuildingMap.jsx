import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BuildingForm from "./BuildingForm";
import { AddMarker } from "../components/AddMarker";
import { LeafletContainer } from "../maps/leaflet-container";
import { LeafletMap } from "../maps/leaflet-map";

export const AddBuildingMap = () => {
  const [coordinates, setCoordinates] = useState();

  const navigate = useNavigate();

  const onSubmit = (building) => {
    console.log("coor", coordinates);
    if (!coordinates) return;
    const newBuilding = {
      ...building,
      coordinates: {
        lat: coordinates.lat,
        lng: coordinates.lng,
      },
    };
    console.log(newBuilding);
    navigate("./");
  };

  return (
    <div classname="uploadPageContainer">
      <BuildingForm submit={onSubmit} />
      <LeafletContainer>
        <LeafletMap />
        <AddMarker setPosition={setCoordinates} />
      </LeafletContainer>
    </div>
  );
};

export default AddBuildingMap;
