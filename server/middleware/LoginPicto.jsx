import UserLogo from "../assets/user.svg";

const LoginPicto = ({ setActive }) => {
  return (
    <div className="" onClick={() => setActive(true)}>
    <img src={UserLogo} alt="User picto" className="hover:scale-125" alt="filters bar" style={{ height: '30px', }}/>
    </div>

    );
};

export default LoginPicto;



