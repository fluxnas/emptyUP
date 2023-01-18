import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef, useState } from "react";
import { NavLink } from 'react-router-dom'
import UploadLogo from "../components/UploadLogo";
import Left from "../assets/Left.svg";
import ProfilePicture from "../components/ProfilePicture"
import PostButton from"../components/PostButton"
import Message from "../components/Message"
import Pp from '../assets/Pp.png';

const Username="Roro68"


const MessagesPage =() => {

const [msgs, setMsgs] = useState([]);

const [newMsg, setNewMsg] = useState("")
// Save todos to localStorage
 
//COMPORTEMENTS
const deleteMsg= (id) => {
  //copie
  const copyMsgs = [...msgs]
  //manipuler
  const copyMsgsUpdated = copyMsgs.filter((msg) => msg.id !== id)
  //actualiser
  setMsgs(copyMsgsUpdated);
}

const handleSubmit = (event) => {
  event.preventDefault()
  //copie
  const copyMsgs = [...msgs]
  //manipuler
  const id = new Date().getTime()
  const name = newMsg
  const msgToAdd={ id, name}
  copyMsgs.push(msgToAdd)
  //actualiser
  setMsgs(copyMsgs);
  setNewMsg("")
}


const handleChange =(event) =>{
  setNewMsg(event.target.value)

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
	return(

		 <div className="h-full flex flex-col box-border " id="box">
		 	
				<NavLink to="/profile" className="flex h-1/12 box-border font-bold  p-3 hover:shadow-inner">
        			<img src={Left} alt="back" className="flex box-border" style={{ width: '20px',height: '20px', marginTop :'2px',marginRight:'3px'}}/> 
        			<a className=" text-l hover:decoration-double text-left " alt="filters bar">
        			BACK TO PROFIL 
        			</a>
      			</NavLink>
     		<h3 className="text-black box-border h-1/6 font-bold text-5xl flex justify-center  ">
				My Messages</h3>
     		
     		<div className="h-4/6 flex flex-col box-border  items-center  rounded-[25px]   "> 
				
				<ul className=" shadow-inner h-4/6 box-border bg-slate-50  w-11/12  rounded-[25px] p-3 flex overflow-scroll  flex-col  items-start ">
        				{msgs.map((msg) => (
          					<Message info={msg} delete={deleteMsg} key={msg.id}/>
        				))}
      			</ul>
      			

  				<form className="p-3 mt-4 flex  justify-between box-border flex-col items-center border-dotted border-3 border border-black rounded-[25px] h-2/6 w-11/12" action="submit" onSubmit={handleSubmit}>
       				<div className=" w-full   box-border flex pb-2">
        					<h4 className="font-bold text-sm italic ">SEND A MESSAGE TO: </h4>
          					<input className=" italic h-4 bg-slate-50 text-xs mx-3 text-blue-800  shadow-inner p-3 text-center"
            				//value={}
            				type="text"
            				placeholder="Enter the username"
            				onChange={handleChange}/>
          			</div>
          			<div className="box-border shadow-inner w-11/12 h-3/5     ">
          				<input className="  h-full w-full bg-slate-50 "
            			value={newMsg}
            			type="text"
            			placeholder="You can wrote a message here!"
            			onChange={handleChange}/>  
            		</div>
            		<PostButton type="submit"/>
      			</form>
      			<footer className="h-1/12"></footer>
      		</div>
		</div>
	)
}

export default MessagesPage