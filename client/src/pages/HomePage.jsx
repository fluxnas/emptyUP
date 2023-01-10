import { LeafletContainer } from "../maps/leaflet-container";
import { LeafletMap } from "../maps/leaflet-map";

export const HomePage = () => {
  return (
    <LeafletContainer>
      <LeafletMap />
    </LeafletContainer>
  );
};

export default HomePage