import LogoutButton from "../components/LogoutButton"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { NavLink } from 'react-router-dom'
import Back from "../components/Back";
import ProfilePicture from "../components/ProfilePicture"
import PostButton from"../components/PostButton"
import Annoucement from "../components/Annoucement"
import UploadLogo from "../components/UploadLogo";
import Pp from '../assets/Pp.png';
import { v4 as uuidv4 } from 'uuid';
import Megaphone from "../assets/Megaphone.svg"
import Logo from "../components/Logo"
import Message from "../components/Message"
import MessageIcon from "../assets/MessageIcon.svg"
import Discussion from "../components/Discussion"
const Username="Roro68"
//change with backend
const DiscussionsPage =() => {
const [discussions, setDiscussions] = useState([]);
const [newDiscussion, setNewDiscussion] = useState("")
const [newUserName, setNewUserName] = useState("")
const apiUrl = '/api/annonces';

useEffect(() => {
req();
}, [])

const req = async () => {
try {
const response = await axios.get(apiUrl, {
        headers: {
          "ngrok-skip-browser-warning": "69420"
        }
      });
console.log (response)
const dat = response.data.data
const newDiscussions = dat.map(discussion => {
const content = discussion.content;
const userName =discussion.userName
const id = discussion.id;
const user_id=discussion.user_id
return { userName, id, content, user_id};
});
setDiscussions(newDiscussions)
}
catch (error) {
console.log(error);
}
}

const handleSubmit = (event) => {
event.preventDefault()
const id = uuidv4();
const content = newDiscussion
const userName= newUserName


const discussionToAdd={ id, content, userName}
setDiscussions(prevDiscussions => [...prevDiscussions, discussionToAdd])
setNewDiscussion("")

axios.post(apiUrl+'/add', discussionToAdd)
   .then(response => {
      console.log("discussion added")
   })
   .catch(error => {
      console.log(error);
   });

}

  return(
    <div className="h-screen font-custom1  w-screen flex flex-col box-border ">
        <div className="flex h-1/12 w-full box-border justify-between px-5 pt-5 ">
          <Logo/>
          <LogoutButton/>
        </div>

        <h3 className="h-1/6 uppercase text-black font-bold text-5xl flex items-center justify-center">
        My Discussions
         <img src={MessageIcon} alt="megaphone" className="flex box-border" style={{ height: '45px', marginLeft :'20px',marginTop :'2px'}}/>
         </h3>

        <div className="h-4/6 flex flex-col box-border items-center rounded-[25px] ">
        <ul className=" shadow-inner h-4/6 box-border bg-slate-50  w-11/12  rounded-[25px] p-3 flex overflow-scroll flex-col items-start ">
              {discussions.map((discussion) => (<Discussion info={discussion} key={discussion.id}/>
              ))}
            </ul>
        <form className="p-3 mt-4 flex justify-between box-border flex-col items-center border-dotted border-3 border border-black rounded-[25px] h-2/6 w-11/12" action="submit" onSubmit={handleSubmit}>
          <div className=" w-full box-border flex pb-2">
            <h4 className="font-bold text-sm italic ">
            WRITE A MESSAGE TO:
            </h4>
            <input className=" italic h-4 bg-slate-50 text-xs mx-3 text-blue-800 shadow-inner p-3 text-center"
                   value={newUserName}
                   type="text"
                   placeholder="Enter the subject"
                   onChange={e => setNewUserName(e.target.value)}
            />
          </div>

          <div className="box-border shadow-inner w-11/12 h-3/5     ">
            <input className="  h-full w-full bg-slate-50 "
            type="text"
            value={newDiscussion}
            placeholder="You can wrote a message here!"
            onChange={e => setNewDiscussion(e.target.value)}
            />
          </div>

          <PostButton type="submit"/>
        </form>
      </div>

      <footer className="h-1/12 flex pt-4 items-end justify-center">
          <NavLink to="/upload">
            <UploadLogo />
          </NavLink>
        </footer>

    </div>
  )
}


export default DiscussionsPage
