import { NavLink } from 'react-router-dom'
import Filters from '../assets/Filters.png';
import Logonotext from "../assets/logonotext.png"

const UploadLogo = () => {
	return (
		<div className="UploadLogo">
				<NavLink to="/upload"> 
					<img src= {Logonotext} alt="Upload a building" style={{ height: '60px', }} />
					<p> UPLOAD A SPACE </p>
				</NavLink>
				
		</div>	
		)
}

export default UploadLogo