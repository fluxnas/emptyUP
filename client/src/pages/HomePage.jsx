
import Navigation from "../components/Navigation"
import UploadLogo from "../components/UploadLogo"
import { LeafletContainer } from "../maps/leaflet-container";
import { LeafletMap } from "../maps/leaflet-map";
import "../App.css"

const HomePage =() => {
	return(
		<div className="HomePage">
			<Navigation />
      		<LeafletContainer>
      			<LeafletMap />
    		</LeafletContainer>
			<UploadLogo/>
		</div>
	)
}

export default HomePage