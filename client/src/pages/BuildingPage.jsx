import { useState, useEffect } from "react";
import axios from "axios";

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
        const dateofpost = building.dateofpost;
        const id = building.id;
        const adress = building.adress;
        const city = building.city;
        const type = building.type;
        const zipcode = building.zipcode;
        const admin_id = building.admin_id;
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
      <div className="divForBuildingAndComments flex">
        {buildings.length !== 0 && (
          <div className="divForBuildingAndInfo flex">
            <div className="divBuilding">
              <img
                src={buildings[0].initial_image}
                alt="building's img"
                className="box-border"
                // style={{ height: "40px", marginLeft: "20px" }}
              />
            </div>
            <div className="divInfo flex">
              Haha City: {buildings[0].city}
              Zipcode: {buildings[0].zipcode}
              Address: {buildings[0].adress}
              Type: {buildings[0].type}
              Date: {buildings[0].dateofpost}
            </div>
          </div>
        )}

        <div>Comments</div>
      </div>
      <div className="divAddPhoto">Add Photo</div>
    </div>
  );
};

export default BuildingPage;
