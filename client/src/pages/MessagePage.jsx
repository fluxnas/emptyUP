import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";
import { NavLink } from 'react-router-dom'
import UploadLogo from "../components/UploadLogo";
import Left from "../assets/Left.svg";
import ProfilePicture from "../components/ProfilePicture"
const Username="Roro68"
const date="07/12/22"

const MessagePage =() => {
	return(
		<div className="h-screen flex flex-col "> 

		<NavLink to="/messages" className="flex font-bold justify-flex-start p-2 hover:shadow-inner">
        <img src={Left} alt="back" style={{ height: '20px', marginTop :'2px',marginRight:'3px'}}/> 
        <a className=" text-l hover:decoration-double " alt="filters bar">
        BACK TO MESSAGES
        </a>
      </NavLink>

		<h3 className="text-black font-bold text-5xl flex justify-center py-5">
			My Messages</h3>

<div className="my-1 flex justify-around mx-30 box-border ">
			<div className="flex  " >
				<NavLink to="/message">
				<ProfilePicture /> 
				</NavLink> 
				<div className="flex flex-col  max-w-xs">
					<h5 className="text-blue-800 p-0 m-0">{Username} wrote on {date} :</h5>
					<comment className="text-justify text-l h-24 overflow-hidden">
					nhrd ccnrh jbvhdkjfnjk n d ehrdccnrhjbvhdkjfnjk n d ehrdccnrh jbvhdk jfnjk n d ehr dccnrhjbv hdkjfnjk n d ehrdcc nrhjbvhdkjfnjk n d ehrdccnrh jbvhdkjfnjk n d eh fhbr brf n" fhr" f "hf h rfh rfh hf h fhf h fh' fh 'fh' fh fh 'fh fhthrvkj
					</comment>
				</div>
      		</div>
      	</div>
      	
		<NavLink to="/upload">
      <UploadLogo/> 
      
      </NavLink> 
		</div>
	)
}

export default MessagePage