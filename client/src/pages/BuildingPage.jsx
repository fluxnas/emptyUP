import { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../components/Logo";
import LogoutButton from "../components/LogoutButton";

const BuildingPage = () => {
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
        const id = building.id;
        const adress = building.adress;
        const city = building.city;
        const type = building.type;
        const zipcode = building.zipcode;
        const admin_id = building.admin_id;
        const lat = building.lat;
        const lon = building.lon;
        const initial_image = building.initial_image;
        const date = new Date(building.dateofpost);
        const options = { year: "numeric", month: "2-digit", day: "2-digit" };
        const dateofpost = date
          .toLocaleDateString("en-GB", options)
          .replace(/\//g, "/");

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
      <div className="flex h-1/12 w-full box-border justify-between px-5 pt-5">
        <Logo />
        <LogoutButton />
      </div>
      <div className="divForBuildingAndComments flex">
        {buildings.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <div className="divForBuildingAndInfo flex">
            <div className="divBuilding">
              <img
                src={buildings[0].initial_image}
                alt="building's img"
                className="box-border"
                style={{ height: "40vh", width: "40vw" }}
              />
            </div>
            <div className="divInfo flex flex-col">
              <p>City: {buildings[0].city}</p>
              <p>Zipcode: {buildings[0].zipcode}</p>
              <p>Address: {buildings[0].adress}</p>
              <p>Type: {buildings[0].type}</p>
              <p>Date: {buildings[0].dateofpost}</p>
            </div>
          </div>
        )}
		
      </div>
      <div className="divComments">Comments</div>
    </div>
  );
};

export default BuildingPage;
