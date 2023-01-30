import ProfilePicture from "../components/ProfilePicture"

const LogoutButton = ({onClick}) => {
    return (
        <button  onClick={onClick} className=" hover:shadow text-black  flex text-l w-28 border rounded-xl p-1 pr-3  justify-between" >
        <div className=" h-7 w-7  truncate overflow: hidden; rounded-full" >
        <ProfilePicture/>
        </div>
        <p className="flex text-l font-bold  items-center">Logout</p>
        </button>
        )}
    export default LogoutButton

