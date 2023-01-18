import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef, useState } from "react";
import { NavLink } from 'react-router-dom'
import Left from "../assets/Left.svg";
import ProfilePicture from "../components/ProfilePicture"
import PostButton from"../components/PostButton"
import Annoucement from "../components/Annoucement"
import Pp from '../assets/Pp.png';

const Username="Roro68"


const AnnoucementsPage =() => {
	const [posts, setPosts] = useState([]);
	const [newPost, setNewPost] = useState("")
	const [newSubject, setNewSubject] = useState("")

	const deletePost= (id) => {
  	setPosts(posts.filter((post) => post.id !== id));
	}

	const handleSubmit = (event) => {
  	event.preventDefault()
  	const id = new Date().getTime()
  	const name = newPost
  	const subject = newSubject
  	const postToAdd={ id, name, subject}
  	posts.push(postToAdd)
  	setPosts(posts);
  	setNewPost("")
  	setNewSubject("")
	}

    const handleChange =(event) =>{
    setNewPost(event.target.value)
    }

    const handleChangeS =(event) =>{
    setNewSubject(event.target.value)
    }

	return (
		 <div className="h-full flex flex-col box-border " id="box">
			<NavLink to="/profile" className="flex h-1/12 box-border font-bold  p-3 hover:shadow-inner">
        			<img src={Left} alt="back" className="flex box-border" style={{ width: '20px',height: '20px', marginTop :'2px',marginRight:'3px'}}/>
        			<a className=" text-l hover:decoration-double text-left " alt="filters bar">
        			BACK TO PROFIL
        			</a>
      		</NavLink>
     		<h3 className="text-black box-border h-1/6 font-bold text-5xl flex justify-center  ">
				Annoucements</h3>
     		<div className="h-4/6 flex flex-col box-border  items-center  rounded-[25px]   ">
				<ul className=" shadow-inner h-4/6 box-border bg-slate-50  w-11/12  rounded-[25px] p-3 flex overflow-scroll  flex-col  items-start ">
        			{posts.map((post) => (<Annoucement info={post} delete={deletePost} key={post.id}/>
        			))}
      			</ul>
  				<form className="p-3 mt-4 flex  justify-between box-border flex-col items-center border-dotted border-3 border border-black rounded-[25px] h-2/6 w-11/12" action="submit" onSubmit={handleSubmit}>
          			<div className=" w-full   box-border flex pb-2">
        					<h4 className="font-bold text-sm italic ">SUBJECT: </h4>
          					<input className=" italic h-4 bg-slate-50 text-xs mx-3 text-blue-800  shadow-inner p-3 text-center"
            				value={newSubject}
            				type="text"
            				placeholder="Enter the subject"
            				onChange={handleChangeS}/>
          			</div>

          			<div className="box-border shadow-inner w-11/12 h-3/5     ">
          				<input className="  h-full w-full bg-slate-50 "
            			value={newPost}
            			type="text"
            			placeholder="You can wrote a message here!"
            			onChange={handleChange}/>
            		</div>

            		<PostButton type="submit"/>
      			</form>
            </div>

      		<footer className="h-1/12"></footer>

		</div>
	)
}
/*
	const navigate = useNavigate();
  const inputRefUserName = useRef();
  const inputRefMessage = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(inputRefMessage.current.value);
    console.log(inputRefUserName.current.value);
    navigate("/messages");
    setIsSubmitting(true);
    const data = {
        userName: inputRefUserName.current.value,
        src: Pp
        message: inputRefMessage.current.value
    };
    axios.post('/api/user/message', data)
        .then(response => {
            console.log(response.data);
            setIsSubmitting(false);
        })
        .catch(error => {
            console.log(error);
            setIsSubmitting(false);
        });
  };*/

export default AnnoucementsPage
