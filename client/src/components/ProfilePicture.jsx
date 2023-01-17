import { NavLink } from 'react-router-dom'
import Pp from '../assets/Pp.png';
const ProfilePicture = () => {
	return (
		<div className="hover:scale-125 px-5 ">
					<img src= {Pp} alt="profile picture" className="  rounded-full  w-32 h-32 " />	

		</div>	

		)
}

export default ProfilePicture