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



const Username="Roro68"


const AnnoucementsPage =() => {
const [posts, setPosts] = useState([]);
const [newPost, setNewPost] = useState("")
const [newSubject, setNewSubject] = useState("")
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
const newPosts = dat.map(post => {
const content = post.content;
const subject = post.subject;
const date = post.date;
const id = post.id;
const user_id=post.user_id
return { id, content, subject, date, user_id};
});
setPosts(newPosts)
}
catch (error) {
console.log(error);
}
}


const deletePost= (id) => {
axios.delete(apiUrl+'/'+id)
.then(response => {
console.log("post deleted")
})
.catch(error => {
console.log(error);
});
setPosts(prevPosts => prevPosts.filter((post) => post.id !== id))
}

const handleSubmit = (event) => {
event.preventDefault()
const id = uuidv4();
const content = newPost
const subject = newSubject
const postToAdd={ id, content, subject}
setPosts(prevPosts => [...prevPosts, postToAdd])
setNewPost("")
setNewSubject("")
axios.post(apiUrl+'/add', postToAdd)
   .then(response => {
      console.log("post added")
   })
   .catch(error => {
      console.log(error);
   });

}

return (
      <div className="h-screen font-custom1  w-screen flex flex-col box-border ">
        <div className="flex h-1/12 w-full box-border justify-between px-5 pt-5">
          <Logo/>
          <LogoutButton/>
        </div>

     	<h3 className="h-1/6 uppercase text-black font-bold text-5xl flex items-center justify-center">
			Posts
      <img src={Megaphone} alt="megaphone" className="flex box-border" style={{ height: '40px', marginLeft :'20px'}}/>
      </h3>

      <div className="h-4/6 flex flex-col box-border items-center rounded-[25px] ">
				<ul className=" shadow-inner h-4/6 box-border bg-slate-50  w-11/12  rounded-[25px] p-3 flex overflow-scroll flex-col items-start ">
        			{posts.map((post) => (<Annoucement info={post} delete={deletePost} key={post.id}/>
        			))}
      			</ul>
  			<form className="p-3 mt-4 flex justify-between box-border flex-col items-center border-dotted border-3 border border-black rounded-[25px] h-2/6 w-11/12" action="submit" onSubmit={handleSubmit}>
          <div className=" w-full box-border flex pb-2">
        		<h4 className="font-bold text-sm italic ">
            SUBJECT:
            </h4>
          	<input className=" italic h-4 bg-slate-50 text-xs mx-3 text-blue-800 shadow-inner p-3 text-center"
            		   type="text"
                    value={newSubject}
                    onChange={e => setNewSubject(e.target.value)}
            		   placeholder="Enter the subject"
            />
          </div>

          <div className="box-border shadow-inner w-11/12 h-3/5     ">
            <input className="  h-full w-full bg-slate-50 "
            type="text"
            value={newPost}
            placeholder="You can wrote a message here!"
            onChange={e => setNewPost(e.target.value)}
            />
          </div>

          <PostButton type="submit"/>
      	</form>
      </div>

       <footer className="h-1/12  pt-4 flex justify-center">
          <NavLink to="/upload" className=" ">
            <UploadLogo />
          </NavLink>
        </footer>

		</div>
	)
}

export default AnnoucementsPage
