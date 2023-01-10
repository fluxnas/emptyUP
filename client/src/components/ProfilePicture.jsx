import { NavLink } from 'react-router-dom'
import Pp from '../assets/Pp.png';

const ProfilePicture = () => {
	return (
		<div className="ProfilePicture">
					<img src= {Pp} alt="profile picture" style={{ width:'150px', height: '150px', boxSizing: 'cover'}} />
		</div>	

		)
}

export default ProfilePicture