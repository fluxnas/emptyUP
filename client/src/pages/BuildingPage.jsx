import { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../components/Logo";
import LogoutButton from "../components/LogoutButton";
import { v4 as uuidv4 } from 'uuid';
import Megaphone from "../assets/Megaphone.svg"
import UploadLogo from "../components/UploadLogo";
import SearchButton from "../components/SearchButton"
import PostButton from"../components/PostButton"
import { NavLink } from 'react-router-dom'
import Comment from "../components/Comment"


const BuildingPage = () => {
const [buildings, setBuildings] = useState([]);
const [comments, setComments] = useState([]);
const [newComment, setNewComment] = useState("")

const [id_building, setId_Building]=useState("")

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

  useEffect(() => {
  req();
  }, [])

  const req = async () => {
  try {
    const response = await axios.get("/comments/"+id_building, {
        headers: {
          "ngrok-skip-browser-warning": "69420"
        }
      });
      console.log (response)
      const dat = response.data.data
      const newComments = dat.map(comment => {
        const content = comment.content;
        const date = comment.date;
        const id = comment.id;
        const user_id=comment.user_id
        return { id, content, date, user_id};
      });
      setComments(newComments)
      }
      catch (error) {
      console.log(error);
      }
    }

const deleteComment= (id) => {
axios.delete(+'/building/'+id)
.then(response => {
console.log("comment deleted")
})
.catch(error => {
console.log(error);
});
setComments(prevComments => prevComments.filter((comment) => comment.id !== id))
}

const handleSubmit = (event) => {
event.preventDefault()
const id = uuidv4();
const content = newComment
const commentToAdd={ id, content}
setComments(prevComments => [...prevComments, commentToAdd])
setNewComment("")
axios.post("/building/"+'/add', commentToAdd)
   .then(response => {
      console.log("comment added")
   })
   .catch(error => {
      console.log(error);
   });
}


  return (
    <div className="font-custom1  h-screen w-screen flex flex-col m-0 p-0">
      <div className="flex h-1/12 w-full box-border justify-between px-5 pt-5">
        <Logo />
        <LogoutButton />
      </div>
        <h3 className="h-1/6 m-1 uppercase text-black font-bold text-5xl flex items-center justify-center">
      SPACE TO UP
      </h3>




      <div className="h-4/6 flex box-border items-center justify-around rounded-[25px] ">
         <div className="divForBuildingAndComments  w-1/2 h-full flex  ">
        {buildings.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <div className="divForBuildingAndInfo flex justify-around p-10 w-full items-center">
            <div className="divBuilding h-72 w-72 border flex  shadow overflow:hidden rounded-full truncate">
              <img
                src={buildings[0].initial_image}
                alt="building's img"
                className="  origin-top font-Custom1 h-72 "
              />
            </div>
            <div className="divInfo flex flex-col">
              <p className="font-bold">City: {buildings[0].city}</p>
              <p>Zipcode: {buildings[0].zipcode}</p>
              <p>Address: {buildings[0].adress}</p>
              <p>Type: {buildings[0].type}</p>
              <p>Date: {buildings[0].dateofpost}</p>
            </div>
          </div>
        )}
      </div>
      <div className="w-1/2 h-full flex flex-col">
      <ul className=" shadow-inner h-4/6 box-border bg-slate-50 w-11/12  rounded-[25px] p-3 flex overflow-scroll flex-col items-start ">
              {comments.map((comment) => (<Comment info={comment} delete={deleteComment} key={comment.id}/>
              ))}
            </ul>
        <form className="p-3 mt-4 flex justify-between box-border flex-col items-center border-dotted border-3 border border-black rounded-[25px] h-2/6 w-11/12" action="submit" onSubmit={handleSubmit}>
          <div className=" w-full box-border flex pb-2">

          </div>

          <div className="box-border shadow-inner w-11/12 h-3/5     ">
            <input className="  h-full w-full bg-slate-50 "
            type="text"
            value={newComment}
            placeholder="You can wrote your comment here!"
            onChange={e => setNewComment(e.target.value)}
            />
          </div>

          <PostButton type="submit"/>
        </form>
        </div>
      </div>

       <footer className="h-1/12  pt-4 flex justify-center">
          <NavLink to="/upload" className=" ">
            <UploadLogo />
          </NavLink>
        </footer>

    </div>
  );
};

export default BuildingPage;
