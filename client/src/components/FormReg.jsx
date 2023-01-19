import { useRef, useState } from "react";
import axios from "axios";
import RegisterButton from "../components/RegisterButton";

const FormReg = ({ onSubmit }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputRefUsername = useRef();
  const inputRefEmail = useRef();
  const inputRefPassword = useRef();
  const inputRefConfPassword = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(inputRefUsername.current.value);
    console.log(inputRefEmail.current.value);
    console.log(inputRefPassword.current.value);
    console.log(inputRefConfPassword.current.value);
    setIsSubmitting(true);
    const data = {
      username: inputRefUsername.current.value,
      email: inputRefEmail.current.value,
      password: inputRefPassword.current.value,
      confirm_password: inputRefConfPassword.current.value,
    };
     axios
      .post("/api/user/register", data)
      .then((response) => {
        console.log(response.data);
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.log(error);
        setIsSubmitting(false);
      });
  };

  return (
    <div className="formContainer">
      <form
        className="flex flex-col"
        onSubmit={(event) => {
          onSubmit(event);
          onSubmitHandler(event);
        }}
      >
        <div className="inputDiv">
          <label htmlFor="input">
            Pseudo:{" "}
            <input
              type="text"
              placeholder="Enter your name"
              ref={inputRefUsername}
            />
          </label>
          <label htmlFor="input">
            Email:{" "}
            <input
              type="text"
              placeholder="Enter your email"
              ref={inputRefEmail}
            />
          </label>
          <label htmlFor="input">
            Password:{" "}
            <input
              type="password"
              placeholder="Enter your password"
              ref={inputRefPassword}
            />
          </label>
          <label htmlFor="input">
            Confirm your password:{" "}
            <input
              type="password"
              placeholder="Confirm your password"
              ref={inputRefConfPassword}
            />
          </label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <label htmlFor="input">
            The information provided on this website does not constitute legal
            advice, instead all the information and materials...learn more
          </label>
        </div>
        <div className="buttonDiv">
          <RegisterButton type="submit" disabled={!isChecked} />
        </div>
      </form>
    </div>
  );
};

export default FormReg;
