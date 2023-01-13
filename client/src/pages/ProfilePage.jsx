import ProfilePicture from "../components/ProfilePicture"
import UploadPicto from "../components/UploadPicto"
import '../styles/styles.css';

const Username="Roro68"

const ProfilePage = () => {
	return(

		<div className="flex-basis: 100%;"> 
		<h1 className="text-3xl font-bold text-red-100 underline">
      Hello world!
    </h1>
			<h3 className="text-blue-800">
			Welcome {Username}</h3>
			<ProfilePicture/>
			<div className="w-15, h-150, bg-slate-300">
				<UploadPicto/>
				<p className="text-red-900">Upload a new profile picture </p>		
			</div>
		</div>
	)
}

export default ProfilePage