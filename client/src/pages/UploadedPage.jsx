import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef, useState } from "react";
import { NavLink } from 'react-router-dom'
import UploadLogo from "../components/UploadLogo";
import Left from "../assets/Left.svg";
import Building from "../components/Building"
import {useEffect} from "react";


const UploadedPage =() => {

 const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    getBuildingsUploaded();
  }, []);

  const getBuildingsUploaded = async () => {
    try {
      const response = await axios.get('/api/user/mybuildings/2', {
        headers: {
          "ngrok-skip-browser-warning": "69420"
        }
      });
      const data = response.data.data;
      const newBuildings = data.map(building => {
        const dateofpost = building.dateofpost;
        const id = building.id;
        const adress = building.adress;
        const city = building.city;
        const type = building.type;
        const zipcode = building.zipcode;
        const admin_id = building.admin_id;
        return { id, adress, zipcode, city, type, dateofpost, admin_id};
      });
      setBuildings(newBuildings);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBuildingsUploaded();
  }, [buildings]);

  const deleteBuilding = async (id) => {
    try {
        const deletebuilding = await axios.delete(`/api/building/`+id)
        setBuildings(buildings.filter((building) => building.id !== id));
    }
    catch (error) {
        console.log(error);
    }
  }

  return(
		<div className="h-screen flex flex-col ">

		  <NavLink to="/profile" className="flex font-bold justify-flex-start p-2 hover:shadow-inner">
        <img src={Left} alt="back" style={{ height: '20px', marginTop :'2px',marginRight:'3px'}}/> 
        <a className=" text-l hover:decoration-double " alt="filters bar">
        BACK TO PROFIL 
        </a>
      </NavLink>

		  <h3 className="text-black font-bold text-5xl flex justify-center py-5">
			My Uploaded
      </h3>

			<div className="">
        <ul className=" shadow-inner h-4/6 box-border bg-slate-50  w-11/12  rounded-[25px] p-3 flex overflow-scroll  flex-col  items-start ">
            {
              buildings.map((building) => {
                return <Building info={building} delete={deleteBuilding} key={building.id}/>
              })
            }
        </ul>
      </div>

		  <NavLink to="/upload">
      <UploadLogo/>
      </NavLink> 

		</div>
	)
}

export default UploadedPage
