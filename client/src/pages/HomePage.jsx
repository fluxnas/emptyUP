import Navigation from "../components/Navigation";
import UploadLogo from "../components/UploadLogo";
import { LeafletContainer } from "../maps/leaflet-container";
import { LeafletMap } from "../maps/leaflet-map";
import Modal from "../components/Modal";
import "../App.css";
import { useState } from "react";

const HomePage = () => {
  const [modalActive, setModalActive] = useState(false);
  const [modalActiveLog, setModalActiveLog] = useState(false);
  const [modalActiveReg, setModalActiveReg] = useState(false);

  return (
    <div className="HomePage">
      <Navigation />
      <LeafletContainer>
        <LeafletMap />
      </LeafletContainer>
      <UploadLogo setActive={setModalActive} />
      <Modal active={modalActive} setActive={setModalActive}>
        <p>You need to register and login before uploading spaces. </p>
        <button
          onClick={() => {
            setModalActive(false);
            setModalActiveLog(true);
          }}
        >
          Login
        </button>
        <button
          onClick={() => {
            setModalActive(false);
			setModalActiveReg(true);
          }}
        >
          Register
        </button>
      </Modal>
      <Modal active={modalActiveLog} setActive={setModalActiveLog}>
        <input type="text" />
        <input type="text" />
        <button>Login</button>
      </Modal>
	  <Modal active={modalActiveReg} setActive={setModalActiveReg}>
        <input type="text" />
        <input type="text" />
		<input type="text" />
    
        <button>Register</button>
      </Modal>
    </div>


  );
};

export default HomePage;
