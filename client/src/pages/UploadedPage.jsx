import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { NavLink } from 'react-router-dom'
import UploadLogo from "../components/UploadLogo";
import Back from "../components/Back";
import Building from "../components/Building"

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

      const BuildingsUploaded = data.map(building => {
        const dateofpost = building.dateofpost;
        const id = building.id;
        const adress = building.adress;
        const city = building.city;
        const type = building.type;
        const zipcode = building.zipcode;
        const admin_id = building.admin_id;
        return { id, adress, zipcode, city, type, dateofpost, admin_id};
      });
      setBuildings(BuildingsUploaded);
    } catch (error) {
      console.log(error);
    }
  }

  const deleteBuilding= (id) => {
    axios.delete('/api/building/delete/'+id)
    .then(response => {
console.log("building deleted")
})
.catch(error => {
console.log(error);
});
  setBuildings(buildings.filter((building) => building.id !== id))

  }


  return(
	<div className="h-full flex flex-col box-border">
		  <NavLink to="/profile" className="flex h-1/12 box-border font-bold  p-3 hover:shadow-inner">
        <Back/>
        <p className=" text-l hover:decoration-double " alt="back to profile">
        BACK TO PROFIL 
        </p>
      </NavLink>

		  <h3 className="text-black font-bold text-5xl flex justify-center py-5">
			My Uploaded
      </h3>

			<div className="h-4/6 flex flex-col box-border items-center rounded-[25px]">
        <ul className=" shadow-inner h-full box-border bg-slate-50  w-11/12  rounded-[25px] p-3 flex overflow-scroll  flex-col  items-start ">
            {
              buildings.map((building) => {
                return <Building info={building} delete={deleteBuilding} key={building.id}/>
              })
            }
        </ul>
      </div>

		  <footer className="h-1/12">
           <NavLink to="/upload">
      <UploadLogo/>
      </NavLink>
          </footer>

		</div>
	)
}

export default UploadedPage
