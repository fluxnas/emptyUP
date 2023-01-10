<<<<<<< HEAD
const ProfilePage = () => {
	return(
		<div> PROFILEPAGE
=======
import ProfilePicture from "../components/ProfilePicture"
import UploadPicto from "../components/UploadPicto"
const Username="Roro68"

const ProfilePage = () => {
	return(
		<div> 
			<h3>Welcome {Username}</h3>
			<ProfilePicture/>
			<div style={{ width:'150px', height: '150px', backgroundColor : 'grey' }}>
				<UploadPicto/>
				<p style={{ fontsize:14,fontWeight:"bold"}}>Upload a new profile picture </p>		
			</div>
>>>>>>> estime
		</div>
	)
}

export default ProfilePage