import ProfilePicture from "../components/ProfilePicture"
import UploadPicto from "../components/UploadPicto"

const Username="Roro68"

const ProfilePage = () => {
	return(

		<div className="flex  flex-col  "> 
			<h3 className="text-blue-800 font-bold text-3xl flex justify-center">
			Welcome {Username}</h3>
			<div className=" flex justify-around">
				<ProfilePicture/>
				<div className="w-40 h-40 rounded-full flex-col flex items-center justify-center px-5 bg-slate-300 flex ">
					<UploadPicto/>
					<p className="text-blue-800 flex items-center font-bold px-2 text-center w-30">Upload a new profile picture </p>		
				</div>
			</div>
		</div>
	)
}

export default ProfilePage