import Logonotext from "../assets/logonotext.png";

const UploadLogo = ({ setActive }) => {
  return (
    <div>
      <div className="flex flex-col items-center text-center text-black font-bold text-lg  my-2 w-15" onClick={() => setActive(true)}>
        <img src={Logonotext} alt="Upload a building" className="p-1 flex justify-center item-center w-14  hover:shadow"/>
        <p className="justify-center text-black flex items-center text-xs font-bold px-2 text-center w-15"> UPLOAD A SPACE </p>
      </div>
    </div>
  );
};

export default UploadLogo;
