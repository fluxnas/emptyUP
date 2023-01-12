import { useRef, useState } from "react";

const FormReg = ({ onSubmit }) => {
  const [isChecked, setIsChecked] = useState(false);

  const inputRefPseudo = useRef();
  const inputRefEmail = useRef();
  const inputRefPassword = useRef();
  const inputRefConfPassword = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(inputRefPseudo.current.value);
    console.log(inputRefEmail.current.value);
    console.log(inputRefPassword.current.value);
    console.log(inputRefConfPassword.current.value);
  };

  return (
    <div className="formContainer">
      <form
        className="form"
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
              ref={inputRefPseudo}
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
              placeholder="nfirm your password"
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
          <button type="submit" disabled={!isChecked}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormReg;
