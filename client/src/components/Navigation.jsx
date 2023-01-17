import { NavLink } from "react-router-dom";
import Filters from "../assets/Filters.png";
import SearchButton from "../components/SearchButton";
import Modal from "../components/Modal";
import UserLogo from "../assets/user.svg";
import "../App.css";
import React, { useState } from "react";

const Navigation = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="flex flex-row justify-between w-full p-2 box-border">
      <NavLink to="/filters">
        <img src={Filters} alt="filters bar" className="hover:scale-125" style={{ height: '30px', }} />
      </NavLink>
      <SearchButton setActive={setModalActive} />
      <Modal active={modalActive} setActive={setModalActive}>
        <input value="text" />
      </Modal>
      <NavLink to="/profile">
        <img src= {UserLogo} className="hover:scale-125" alt="filters bar" style={{ height: '30px', }} />
      </NavLink>
    </div>
  );
};
	
export default Navigation;
