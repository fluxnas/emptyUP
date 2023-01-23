import axios from "axios";
import Navigation from "../components/Navigation";
import UploadLogo from "../components/UploadLogo";
import { LeafletContainer } from "../maps/leaflet-container";
import { LeafletMap } from "../maps/leaflet-map";
import Modal from "../components/Modal";
import { useState } from "react";
import FormReg from "../components/FormReg";
import FormLog from "../components/FormLog";
import FormLog2 from "../components/FormLog2";
import LoginButton from "../components/LoginButton";
import RegisterButton from "../components/RegisterButton";
import LoginPicto from "../components/LoginPicto"


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
    <div className="h-screen w-full flex flex-col items-center justify-between p-0 m-0">

      <LoginPicto setActive={setModalActive} />

      <LeafletContainer>
        <LeafletMap buildings={buildings}/>
      </LeafletContainer>
      <UploadLogo setActive={setModalActive} />
      <Modal active={modalActive} setActive={setModalActive}>
        <p className="flex justify-center text-base">
          You need to register and login before{" "}
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

    </div>
  );
};

export default HomePage;
