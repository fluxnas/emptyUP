const FormLogReg = () => {
  return (
    <div className="formContainer">
      <form className="form">
        <div className="inputDiv">
          <input
            type="checkbox"
            placeholder="Enter the address"
          />
          <label htmlFor="input">
            The information provided on this website does not constitute legal
            advice, instead all the information and materials...learn more
          </label>
        </div>
        <div className="buttonDiv">
          <button onClick={console.log('clicked')}>Login</button>
          <button>Register</button>
        </div>
      </form>
    </div>
  );
};

export default FormLogReg;
