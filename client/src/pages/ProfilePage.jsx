import Navigation from "../components/Navigation";
import ProfilePicture from "../components/ProfilePicture"
import UploadPicto from "../components/UploadPicto"
import { NavLink } from 'react-router-dom'
const Username="Roro68"

const ProfilePage = () => {
	return(
		<div className="h-screen flex flex-col "
		>
<Navigation/>

		<div className="flex  flex-col justify-around h-screen items-center "> 
			<h3 className="text-blue-800 font-bold text-3xl flex justify-center">
			"Welcome {Username}"</h3>
			<div className=" flex justify-between ">
				<ProfilePicture/>
				<div className=" hover:shadow-inner hover:shadow-md cursor-pointer w-32 h-32 rounded-full flex-col flex items-center justify-center  px-5 bg-slate-300 flex ">
					<UploadPicto/>
					<p className="  text-blue-800 flex items-center text-xs font-bold px-2 text-center w-30">Upload a new profile picture ! </p>		
				</div>
			</div>

			<NavLink to="/favorites"> 
        	<button
          onClick={() => {}}
          className=" rounded-lg border-slate-150 border-2 hover:shadow-md hover:text-blue-400 hover:shadow-inner  w-64 bg-white-300 text-blue-800  font-bold cursor-pointer text-l  p-1 flex justify-center "
        	>
          	My Favorites
        </button>
        </NavLink> 
        <NavLink to="/uploaded"> 
         <button
          onClick={() => {
          }}
          className=" rounded-lg border-slate-150 border-2 hover:shadow-md hover:shadow-inner hover:text-blue-400  w-64 bg-white-300 text-blue-800  font-bold cursor-pointer text-l 
           p-1 flex justify-center "
        >
          My Uploaded
        </button>
</NavLink> 
        <NavLink to="/announcements"> 
         <button
          onClick={() => {
          }}
          className=" rounded-lg border-slate-150 border-2 hover:shadow-md hover:text-blue-400 hover:shadow-inner  w-64 bg-white-300 text-blue-800  font-bold cursor-pointer text-l  p-1 flex justify-center "
        >
          Annoucements
        </button>
        </NavLink> 
        <NavLink to="/messages"> 
        <button
          onClick={() => {
          }}
          className="rounded-lg  border-slate-150 border-2 hover:shadow-md hover:text-blue-400 hover:shadow-inner  w-64 bg-white-300 text-blue-800  font-bold cursor-pointer text-l p-1 flex justify-center "
        >
          My Messages
        </button>
        </NavLink> 
        <NavLink to="/logout"> 
        <button onClick={() => {}}
          	className="  rounded-lg border-slate-150 hover:shadow-md hover:text-blue-400 hover:shadow-inner w-64 bg-slate-100 text-blue-800  font-bold cursor-pointer text-l  p-1 flex justify-center "
        	>Logout
        	</button>
        	</NavLink> 
        	 <button onClick={() => {}}
          	className="  rounded-lg hover:shadow-md border-slate-150 hover:text-blue-400 hover:shadow-inner w-64 bg-slate-100 text-blue-800  font-bold cursor-pointer text-l  p-1 flex justify-center "
        	>Unsubscribe
        	</button>
		</div>
		</div>
	)
}

export default ProfilePage