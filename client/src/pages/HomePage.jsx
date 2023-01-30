import axios from "axios";
import Navigation from "../components/Navigation";
import UploadLogo from "../components/UploadLogo";
import { LeafletContainer } from "../maps/leaflet-container";
import { LeafletMap } from "../maps/leaflet-map";
import Modal from "../components/Modal";
import { useState } from "react";
import FormReg from "../components/FormReg";
import FormLog from "../components/FormLog";
import LoginButton from "../components/LoginButton";
import RegisterButton from "../components/RegisterButton";
import LoginPicto from "../components/LoginPicto"
import Logo from "../components/Logo"

const HomePage = () => {

  const [modalActive, setModalActive] = useState(false);
  const [modalActiveLog, setModalActiveLog] = useState(false);
  const [modalActiveReg, setModalActiveReg] = useState(false);

  const onClickLog = () => {
    setModalActive(false);
    setModalActiveLog(true);
  };

  const onClickReg = () => {
    setModalActive(false);
    setModalActiveReg(true);
  };


 const [buildings, setBuildings] = useState([]);

  // const buildings = [
  //   {
  //     city: "Brussels",
  //     zipcode: 1200,
  //     adress: "rue Fabry 59",
  //     type: "Housing",
  //     admin_id: "2",
  //   },
  //   {
  //     city: "Brussels",
  //     zipcode: 1000,
  //     adress: "Cantersteen 1",
  //     type: "Gardens",
  //     admin_id: "3",
  //   },
  // ];
  
  axios
    .get("/api/buildings", {
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    })
    .then((res) => {
      console.log(res.data);
    });


  return (
    <div className="font-custom1  h-screen w-screen flex flex-col box-border m-0 p-0 ">
      <div className="flex h-1/12 w-full box-border justify-between p-5 ">
        <Logo/>
        <LoginPicto setActive={setModalActive}/>
      </div>
      <div className=" h-5/6  ">
      <LeafletContainer>
        <LeafletMap buildings={buildings}/>
      </LeafletContainer>
      </div>

      <footer className="h-1/12 flex justify-center">
        <UploadLogo setActive={setModalActive} className="cursor-pointer"/>
        <Modal active={modalActive} setActive={setModalActive}>
          <p className="flex justify-center text-base">
          First, You need to register and login{" "}
          </p>
          <div className="flex justify-around">
            <LoginButton onClick={onClickLog} />
            <RegisterButton onClick={onClickReg} />
          </div>
        </Modal>

        <Modal active={modalActiveLog} setActive={setModalActiveLog}>
          <FormLog/>
        </Modal>
        <Modal active={modalActiveReg} setActive={setModalActiveReg}>
          <FormReg
          onSubmit={(event) => {
            event.preventDefault();
            setModalActiveReg(false);
            setModalActiveLog(true);
            }}
          />
        </Modal>
      </footer>

    </div>
  );
};

export default HomePage;
