import LogoutButton from "../components/LogoutButton"
import { NavLink } from 'react-router-dom'
import UploadLogo from "../components/UploadLogo";
import Back from "../components/Back";
import Heart from "../assets/heart.svg"
import UploadPicture from "../components/UploadPicture"
import Logo from "../components/Logo"
const FavoritesPage =() => {
	return(
		<div className="h-screen font-custom1  w-screen flex flex-col box-border ">
        <div className="flex h-1/12 w-full box-border justify-between px-5 pt-5 ">
          <Logo/>
          <LogoutButton/>
        </div>

		<h3 className="h-1/6 uppercase text-black font-bold text-5xl flex items-center justify-center">
			My Favorites
      <img src={Heart} alt="back" className="flex box-border" style={{ height: '40px', marginLeft :'10px'}}/>
      </h3>

			<div className="h-4/6">


      </div>
		 <footer className="h-1/12  pt-4 flex justify-center">
          <NavLink to="/upload" className=" ">
            <UploadLogo />
          </NavLink>
        </footer>

		</div>
	)
}

export default FavoritesPage
