<<<<<<< HEAD
const HomePage =() => {
	return(
		<div> HOMEPAGE
=======

import Navigation from "../components/Navigation"
import UploadLogo from "../components/UploadLogo"
import { LeafletContainer } from "../maps/leaflet-container";
import { LeafletMap } from "../maps/leaflet-map";

const HomePage =() => {
	return(
		<div className="Homepage">
			<h1>HOMEPAGE</h1>
			<Navigation />
      <LeafletContainer>
      <LeafletMap />
    </LeafletContainer>
			<UploadLogo/>
>>>>>>> estime
		</div>
	)
}

export default HomePage