import { NavLink } from "react-router-dom";
import Filters from "../assets/Filters.png";
import Logonotext from "../assets/logonotext.png";
import "../App.css";

const UploadLogo = ({ setActive }) => {
  return (
    <div>
      <div className="flex flex-col items-center p-2 text-center text-black font-bold text-lg" onClick={() => setActive(true)}>
        <img
          src={Logonotext}
          alt="Upload a building"
          style={{ height: "50px" }}
        />
        <p> UPLOAD A SPACE </p>
      </div>
    </div>
  );
};

export default UploadLogo;
