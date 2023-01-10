import { NavLink } from 'react-router-dom'
import Picto from '../assets/uploadpicto.png';

const UploadPicto = () => {
	return (
		<div className="Picto">
					<img src= {Picto} alt="upload" style={{ width:'30px'}} />
		</div>	

		)
}

export default UploadPicto