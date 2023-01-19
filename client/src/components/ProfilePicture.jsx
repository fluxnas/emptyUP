import { NavLink } from 'react-router-dom'
import Pp from '../assets/Pp.png';

const ProfilePicture = () => {
	return (
		<div className=" w-20 h-20  ">
		<img src= {Pp} alt="profile picture" className="    " />
		</div>	

		)
}

export default ProfilePicture
