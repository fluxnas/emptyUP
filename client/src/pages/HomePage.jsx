import Navigation from "../components/Navigation";
import UploadLogo from "../components/UploadLogo";
import { LeafletContainer } from "../maps/leaflet-container";
import { LeafletMap } from "../maps/leaflet-map";
import Modal from "../components/Modal";
import { useState } from "react";
import FormReg from "../components/FormReg";
import FormLog from "../components/FormLog";
import LoginButton from "../components/LoginButton"
import RegisterButton from "../components/RegisterButton"

const HomePage = () => {
  const [modalActive, setModalActive] = useState(false);
  const [modalActiveLog, setModalActiveLog] = useState(false);
  const [modalActiveReg, setModalActiveReg] = useState(false);

const onClickLog=() => {
            setModalActive(false);
            setModalActiveLog(true)}

const onClickReg=() => {
            setModalActive(false);
            setModalActiveReg(true)}

  return (
    <div className="h-screen w-full flex flex-col items-center justify-between p-0 m-0">
      <Navigation />
      <LeafletContainer>
        <LeafletMap/>
      </LeafletContainer>
      
      <UploadLogo setActive={setModalActive}/>
      
      <Modal active={modalActive} setActive={setModalActive}>
        <p className="flex justify-center text-base">You need to register and login before uploading spaces. </p>
        <div className="flex justify-around">
          <LoginButton onClick={onClickLog}/>
          <RegisterButton onClick={onClickReg}/>
        </div>
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
    </div>


  );
};

export default HomePage;
