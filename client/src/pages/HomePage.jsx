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

const HomePage = () => {
  const [modalActive, setModalActive] = useState(false);
  const [modalActiveLog, setModalActiveLog] = useState(false);
  const [modalActiveReg, setModalActiveReg] = useState(false);
  const [modalActiveSearch, setModalActiveSearch] = useState(false);

  const onClickLog = () => {
    setModalActive(false);
    setModalActiveLog(true);
  };

  const onClickReg = () => {
    setModalActive(false);
    setModalActiveReg(true);
  };

  //  const [buildings, setBuildings] = useState([]);

  const buildings = [
    {
      city: "Brussels",
      zipcode: 1020,
      adress: "park Laeken",
      type: "Housing",
      admin_id: "1",
      position: [50.8931869, 4.358479],
    },
    {
      city: "Brussels",
      zipcode: 1200,
      adress: "rue Fabry 59",
      type: "Housing",
      admin_id: "2",
      position: [50.8384638, 4.4364727],
    },
    {
      city: "Brussels",
      zipcode: 1000,
      adress: "Cantersteen 1",
      type: "Gardens",
      admin_id: "3",
      position: [50.844851, 4.3567924],
    },
    {
      city: "Antwerpen",
      zipcode: 2018,
      adress: "Central Station",
      type: "Gardens",
      admin_id: "3",
      position: [51.2172, 4.4211],
    },
  ];

  const filteredBuildingsCity = buildings.filter(
    (building) => building.city === "Brussels"
  );
  const filteredBuildingsAdmin = buildings.filter(
    (building) => building.admin_id === "3"
  );
  console.log(filteredBuildingsCity);
  console.log(filteredBuildingsAdmin);
  // axios
  //   .get("/api/buildings", {
  //     headers: {
  //       "ngrok-skip-browser-warning": "69420",
  //     },
  //   })
  //   .then((res) => {
  //     console.log(res.data);
  //   });

  // const req = async () => {
  //   const data = await axios.get('/api/annonces', {
  //     headers: {
  //       "ngrok-skip-browser-warning": "69420"
  //     }
  //   })

  // console.log(data.data)
  // .then(response => {
  //   console.log(response)
  //   console.log("ok");
  // })
  // .catch(error => {
  //   console.log(error);
  // });
  // }

  return (
    <div className="h-screen w-full flex flex-col items-center justify-between p-0 m-0">
      <Navigation setActive={setModalActiveSearch} />
      <LeafletContainer>
        <LeafletMap buildings={buildings} />
      </LeafletContainer>
      <UploadLogo setActive={setModalActive} />
      <Modal active={modalActive} setActive={setModalActive}>
        <p className="flex justify-center text-base">
          You need to register and login before uploading spaces.{" "}
        </p>
        <div className="flex justify-around">
          <LoginButton onClick={onClickLog} />
          <RegisterButton onClick={onClickReg} />
        </div>
      </Modal>

      <Modal active={modalActiveLog} setActive={setModalActiveLog}>
        <FormLog />
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
      <Modal active={modalActiveSearch} setActive={setModalActiveSearch}>
        <form>
          <input
            type="text"
            placeholder="Enter your zipcode, address and city"
          />
          <button>Go!</button>
        </form>
      </Modal>
    </div>
  );
};

export default HomePage;
