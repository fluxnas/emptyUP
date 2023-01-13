import Navigation from "../components/Navigation";
import UploadLogo from "../components/UploadLogo";
import { LeafletContainer } from "../maps/leaflet-container";
import { LeafletMap } from "../maps/leaflet-map";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "../App.css";
import Modal from "../components/Modal";
import CalenderForm from "../components/CalenderForm";




const FiltersPage =() => {
	const [modalActive, setModalActive] = useState(false);
	 const [value, setValue] = useState(new Date());
	return(
		<div className="HomePage">
			<Navigation />
			<label>Type
				<select>
						<option value="All">All</option>
						<option value="Housing">Housing</option>
						<option value="Gardens">Gardens</option>
						<option value="Factories">Factories</option>
						<option value="Offices">Offices</option>
						<option value="Multiple">Multiple</option>
				</select>
			</label>
		 	<CalenderForm setActive={setModalActive} />
		 	<Modal active={modalActive} setActive={setModalActive}>
		 		<Calendar onChange={setValue} value={value} />
		    </Modal>
		    
		    <div>
		    	<input type="checkbox" id="commented" name="commented"/>
      			<label for="commented">Most commented</label>
     		</div>
     		<div>
		    	<input type="checkbox" id="less commented" name="commented"/>
      			<label for="commented">Less commented</label>
     		</div>

			<LeafletContainer>
        		<LeafletMap />
     		</LeafletContainer>
			<UploadLogo/>
		</div>

	)
}

export default FiltersPage