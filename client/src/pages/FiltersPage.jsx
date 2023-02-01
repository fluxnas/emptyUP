import Navigation from "../components/Navigation";
import UploadLogo from "../components/UploadLogo";
import { LeafletContainer } from "../maps/leaflet-container";
import { LeafletMap } from "../maps/leaflet-map";
import React, { useState, useEffect } from "react";
import axios from "axios";

const FiltersPage = () => {
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    getAllBuildings();
  }, []);

  useEffect(() => {
    console.log(buildings);
  }, [buildings]);

  const getAllBuildings = async () => {
    try {
      const response = await axios.get("/api/buildings", {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
      });

      const buildingsData = response.data.data;

      const buildingsAll = buildingsData.map((building) => {
        const dateofpost = building.dateofpost;
        const id = building.id;
        const adress = building.adress;
        const city = building.city;
        const type = building.type;
        const zipcode = building.zipcode;
        const admin_id = building.admin_id;
        const position = building.position;
        const lat = building.lat;
        const lon = building.lon;
        const initial_image = building.initial_image;
        return {
          id,
          adress,
          zipcode,
          city,
          type,
          dateofpost,
          admin_id,
          lat,
          lon,
          initial_image,
        };
      });
      setBuildings(buildingsAll);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="font-custom1  h-screen w-screen flex flex-col m-0 p-0">
      <form className="flex flex-col" style={{ width: "30vw" }}>
      <label>
          City: <input type="text" placeholder="Enter your city"/>
        </label>
        <label>
          Zipcode: <input type="text" placeholder="Enter your zipcode"/>
        </label>
        <label>
          Type:
          <select>
            <option value="All">All</option>
            <option value="Housing">Housing</option>
            <option value="Gardens">Gardens</option>
            <option value="Factories">Factories</option>
            <option value="Offices">Offices</option>
            <option value="Multiple">Multiple</option>
          </select>
        </label>
        <button
          type="submit"
          className="bg-blue-800 text-white rounded-md p-1 mr-1 w-24 text-base font-medium hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-800"
        >
          Search
        </button>
      </form>
      <div className=" h-5/6  ">
      <LeafletContainer>
        <LeafletMap buildings={buildings}/>
      </LeafletContainer>
      </div>
      {/* //   <Navigation />
    //   <label>Type
    //     <select>
    //       <option value="All">All</option>
    //       <option value="Housing">Housing</option>
    //       <option value="Gardens">Gardens</option>
    //       <option value="Factories">Factories</option>
    //       <option value="Offices">Offices</option>
    //       <option value="Multiple">Multiple</option>
    //     </select>
    //   </label>

    // //<Modal active={modalActive} setActive={setModalActive}>
    // //	<Calendar onChange={setValue} value={value} />
    // </Modal>

    // <div>
    // <input type="checkbox" id="commented" name="commented"/>
    // <label for="commented">Most commented</label>
    // </div>
    // <div>
    // <input type="checkbox" id="less commented" name="commented"/>
    // <label for="commented">Less commented</label>
    // </div>

    // <LeafletContainer>
    // <LeafletMap />
    // </LeafletContainer>
    // <UploadLogo setActive={setModalActiveLogo} />
    // <Modal active={modalActiveLogo} setActive={setModalActiveLogo}>
    // <p>You need to register and login before uploading spaces. </p>
    // <button onClick={() => {
    //   setModalActiveLogo(false);
    //   setModalActiveLog(true);
    // }}>Login
    // </button>

    // <button onClick={() => {
    //   setModalActiveLogo(false);
    //   setModalActiveReg(true);
    // }}>Register
    // </button>
    // </Modal>

    // <Modal active={modalActiveLog} setActive={setModalActiveLog}>
    // <FormLog/>
    // </Modal>
    // <Modal active={modalActiveReg} setActive={setModalActiveReg}>
    // <FormReg onSubmit={(event) => {
    //   event.preventDefault();
    //   setModalActiveReg(false);
    //   setModalActiveLog(true);
    // }}/>
    // </Modal> */}
    </div>
  );
};

export default FiltersPage;
