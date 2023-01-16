import Navigation from "../components/Navigation";
import UploadLogo from "../components/UploadLogo";
import { LeafletContainer } from "../maps/leaflet-container";
import { LeafletMap } from "../maps/leaflet-map";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "../App.css";
import Modal from "../components/Modal";
import CalenderForm from "../components/CalenderForm";
import FormReg from "../components/FormReg";
import FormLog from "../components/FormLog";




const FiltersPage =() => {
	const [modalActive, setModalActive] = useState(false);
	 const [value, setValue] = useState(new Date());
	 const [modalActiveLogo, setModalActiveLogo] = useState(false);
	 const [modalActiveLog, setModalActiveLog] = useState(false);
	 const [modalActiveReg, setModalActiveReg] = useState(false);
   
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
		 	//<CalenderForm setActive={setModalActive} />
		 	//<Modal active={modalActive} setActive={setModalActive}>
		 	//	<Calendar onChange={setValue} value={value} />
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
			 <UploadLogo setActive={setModalActiveLogo} />
      <Modal active={modalActiveLogo} setActive={setModalActiveLogo}>
      <p>You need to register and login before uploading spaces. </p>
        <button
          onClick={() => {
            setModalActiveLogo(false);
            setModalActiveLog(true);
          }}
        >
          Login
        </button>
        <button
          onClick={() => {
            setModalActiveLogo(false);
            setModalActiveReg(true);
          }}
        >
          Register
        </button>
      </Modal>
      <Modal active={modalActiveLog} setActive={setModalActiveLog}>
        <FormLog/>
      </Modal>
      <Modal active={modalActiveReg} setActive={setModalActiveReg}>
        <FormReg onSubmit={(event) => {
          event.preventDefault();
          setModalActiveReg(false);
          setModalActiveLog(true);
        }}/>
      </Modal>
		</div>)
	
}

export default FiltersPage