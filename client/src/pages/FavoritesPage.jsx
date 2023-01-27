import { NavLink } from 'react-router-dom'
import UploadLogo from "../components/UploadLogo";
import Back from "../components/Back";

const FavoritesPage =() => {
	return(
		<div className="h-screen flex flex-col "> 

		<NavLink to="/profile" className="flex font-bold justify-flex-start p-2 hover:shadow-inner">
        <Back/>
        <p className=" text-l hover:decoration-double " alt="back to profile">
        BACK TO PROFIL 
        </p>
      </NavLink>

		<h3 className="text-black font-bold text-5xl flex justify-center py-5">
			My Favorites</h3>

			<div className="h-screen">
      </div>
		<NavLink to="/upload">
      <UploadLogo/> 
      
      </NavLink> 
		</div>
	)
}

export default FavoritesPage
