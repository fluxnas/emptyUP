import LogoutButton from "../components/LogoutButton"
import { NavLink } from 'react-router-dom'
import UploadLogo from "../components/UploadLogo";
import Back from "../components/Back";
import Heart from "../assets/heart.svg"
const FavoritesPage =() => {
	return(
		<div className="font-custom1  h-screen flex flex-col ">

		<NavLink to="/profile" className="flex font-bold justify-flex-start p-2 hover:shadow-inner">
        <Back/>
        <p className=" text-l hover:decoration-double " alt="back to profile">
        BACK TO PROFIL 
        </p>
      </NavLink>

		<h3 className="text-black uppercase font-bold text-5xl flex justify-center py-5">
			My Favorites
      <img src={Heart} alt="back" className="flex box-border" style={{ height: '40px', marginLeft :'10px'}}/>
      </h3>

			<div className="h-screen">
      </div>
		<NavLink to="/upload">
      <UploadLogo/> 
      
      </NavLink> 
		</div>
	)
}

export default FavoritesPage
