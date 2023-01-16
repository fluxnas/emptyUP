import { NavLink } from "react-router-dom";
import Filters from "../assets/Filters.png";
import Logonotext from "../assets/logonotext.png";
import "../App.css";

const UploadLogo = ({ setActive }) => {
  return (
    <div>
      <div className="flex flex-col items-center p-2 text-center text-black font-bold text-lg hover:scale-125 my-2 w-15" onClick={() => setActive(true)}>
        <img
          src={Logonotext}
          alt="Upload a building"
          className="
					flex justify-center item-center w-11  "
        />
        <p className="justify-center text-blue-800 flex items-center text-xs font-bold px-2 text-center w-15"> UPLOAD A SPACE </p>
      </div>
    </div>
  );
};

export default UploadLogo;
