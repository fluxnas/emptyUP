import { NavLink } from 'react-router-dom'
import Picture from "../components/Picture"

const Username="Roro68"
const date=new Date().toLocaleDateString()

const Discussion = (props) => {
  return(
    <li className="flex justify-between  ">
    <button className="text-2xl text-blue-800 pr-2 mb-3 w-5"  > x
    </button>

    <Picture />
    <div className="flex flex-col   ">
    <h5 className="text-blue-800 text-xl font-bold capitalize p-0 m-0">{props.info.username}{""}</h5>
    <h5 className="text-blue-800 p-0 m-0">{Username} wrote on {date} :</h5>
    <p className="text-justify italic text-sm pr-6 h-16 overflow-hidden ">
    "{props.info.name}{""}"
    </p>
    </div>
    </li>
    )
}

export default Discussion




