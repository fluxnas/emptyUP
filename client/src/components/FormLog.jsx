import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";
import LoginButton from "../components/LoginButton"

const FormLog = () => {
  const navigate = useNavigate();
  const inputRefEmail = useRef();
  const inputRefPassword = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(inputRefEmail.current.value);
    console.log(inputRefPassword.current.value);
    navigate("/upload");
    setIsSubmitting(true);
    const data = {
        email: inputRefEmail.current.value,
        password: inputRefPassword.current.value
    };
    axios.post('/api/user/login', data)
        .then(response => {
            console.log(response.data);
            setIsSubmitting(false);
        })
        .catch(error => {
            console.log(error);
            setIsSubmitting(false);
        });
  };

  return (
    <div className="formContainer">
     <form className="form" onSubmit={(event) => {
        onSubmitHandler(event)}}>
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
            <LoginButton type="submit"/>
        </div>
      </form>
    </div>
  );
};

export default FormLog;
