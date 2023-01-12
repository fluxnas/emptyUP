import { NavLink } from 'react-router-dom'
import Filters from '../assets/Filters.png';
import Loupe from '../assets/loupe.png';
import UserLogo from '../assets/user.svg'
import "../App.css"

const Navigation = () => {
	return (
		<div className="Navigation">
				<NavLink to="/filters"> 
					<img src= {Filters} alt="filters bar" style={{ height: '30px', }} />
				</NavLink>
				<NavLink to="/search"> 
					<img src= {Loupe} alt="logo search" style={{ height: '30px', }} />
				</NavLink>
				<NavLink to="/profile"> 
					<img src= {UserLogo} alt="filters bar" style={{ height: '30px', }} />
				</NavLink>
		</div>	
		)
}

export default Navigation