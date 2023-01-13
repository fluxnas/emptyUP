import { NavLink } from 'react-router-dom'
import Pp from '../assets/Pp.png';
import "../styles/styles.css"
const ProfilePicture = () => {
	return (
		<div >
					<img src= {Pp} alt="profile picture" className="w-150, h-150" />
					<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Bouton
</button>

		</div>	

		)
}

export default ProfilePicture