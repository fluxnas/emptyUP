import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const FormLog = () => {
  const navigate = useNavigate();
  const inputRefEmail = useRef();
  const inputRefPassword = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(inputRefEmail.current.value);
    console.log(inputRefPassword.current.value);
    navigate("/upload");
  };

  return (
    <div className="formContainer">
     <form className="form" onSubmit={(event) => {
        onSubmitHandler(event)
      }}>
        <div className="inputDiv">
          <input
            type="text"
            placeholder="Enter the email"
            ref={inputRefEmail}
          />
          <input
            type="password"
            placeholder="Enter the password"
            ref={inputRefPassword}
          />
        </div>
        <div className="buttonDiv">
            <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default FormLog;
