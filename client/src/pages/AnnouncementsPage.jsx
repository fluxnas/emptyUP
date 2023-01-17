import { NavLink } from 'react-router-dom'
import UploadLogo from "../components/UploadLogo";
import Left from "../assets/Left.svg";

const AnnouncementsPage =() => {
	return(
	<div className="h-screen flex flex-col "> 
		<NavLink to="/profile" className="flex font-bold justify-flex-start p-2 hover:shadow-inner">
        	<img src={Left} alt="back" style={{ height: '20px', marginTop :'2px',marginRight:'3px'}}/> 
        	<a className=" text-l hover:decoration-double " alt="filters bar">
        	BACK TO PROFIL 
        	</a>
      	</NavLink>
		<h3 className="text-black font-bold text-5xl flex justify-center py-5">
		Annoucements</h3>
		<div className="h-screen">
		
      	</div>
		<NavLink to="/upload">
      		<UploadLogo/> 
      	</NavLink> 
	</div>
	)
}

export default AnnouncementsPage