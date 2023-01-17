import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef, useState } from "react";
import { NavLink } from 'react-router-dom'
import UploadLogo from "../components/UploadLogo";
import Left from "../assets/Left.svg";
import ProfilePicture from "../components/ProfilePicture"
import PostButton from"../components/PostButton"


const Username="Roro68"
const date="07/12/22"

const MessagesPage =() => {
	const navigate = useNavigate();
  const inputRefUserName = useRef();
  const inputRefMessage = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(inputRefMessage.current.value);
    console.log(inputRefUserName.current.value);
    navigate("/upload");
    setIsSubmitting(true);
    const data = {
        userName: inputRefUserName.current.value,
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
  };
	return(
	<div className="h-screen flex flex-col justify-between items-center   "> 
<div>
		<NavLink to="/profile" className="flex font-bold justify-flex-start  hover:shadow-inner">
        	<img src={Left} alt="back" style={{ height: '20px', marginTop :'2px',marginRight:'3px'}}/> 
        	<a className=" text-l hover:decoration-double text-left " alt="filters bar">
        	BACK TO PROFIL 
        	</a>
      	</NavLink>
      	</div>

		<h3 className="text-black font-bold text-5xl flex justify-center py-2">
			My Messages</h3>

		<div className="h-2/4 w-4/5 my-1 flex justify-between items-center  mx-30 bg-slate-300">
			<div className="flex ">
				<NavLink to="/message">
				<ProfilePicture /> 
				</NavLink> 
				<div className="flex flex-col  max-w-xs">
					<h5 className="text-blue-800 p-0 m-0">{Username} wrote on {date} :</h5>
					<comment className="text-justify text-m h-24 overflow-hidden ">
					nhrd ccnrh jbvhdkjfnjk n d ehrdccnrhjbvhdkjfnjk n d ehrdccnrh jbvhdk jfnjk n d ehr dccnrhjbv hdkjfnjk n d ehrdcc nrhjbvhdkjfnjk n d ehrdccnrh jbvhdkjfnjk n d eh fhbr brf n" fhr" f "hf h rfh rfh hf h fhf h fh' fh 'fh' fh fh 'fh fhthrvkj
					</comment>
				</div>
      		</div>
      	</div>

      	<form className="p-3 m-3 flex flex-col items-center border border-black rounded-l w-4/5" onSubmit={(event) => {
        onSubmitHandler(event)
      }}> 
        		<div className="flex justify-around">
          			<input
            		type="text"
            		placeholder="Enter the username"
            		ref={inputRefUserName}
          			/>
          			<PostButton type="submit"/>
          		</div>
          		<input className="w-4/5  bg-red-200 flex  h-24"
            	type="text"
            	placeholder="You can wrote a message here!..........................................................................................................................................................................................................."
            	ref={inputRefMessage}
          		/>
      	</form>
		
		<NavLink to="/upload">
      		<UploadLogo/> 
      </NavLink> 
	</div>
	)
}

export default MessagesPage