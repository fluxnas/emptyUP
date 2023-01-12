import { NavLink } from 'react-router-dom'
import Filters from '../assets/Filters.png';
import Logonotext from "../assets/logonotext.png"
import "../App.css"

const UploadLogo = ({setActive}) => {
	return (
		<div>
					<div className="UploadLogo" onClick={() => setActive(true)}>
						<img src= {Logonotext} alt="Upload a building" style={{ height: '50px', }} />
						<p> UPLOAD A SPACE </p>
					</div>
				</NavLink>
		</div>	
		)
}

export default UploadLogo

//navlink-to="/upload"