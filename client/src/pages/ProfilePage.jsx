import ReactDOM from 'react-dom'
import Navigation from "../components/Navigation";
import ProfilePicture from "../components/ProfilePicture"
import UploadPicto from "../components/UploadPicto"
import { NavLink } from 'react-router-dom'
import UserLogo from "../assets/user.svg";
import Left from "../assets/Left.svg";
import UploadLogo from "../components/UploadLogo"
import { useState } from "react";
import Modal from "../components/Modal";
import UnsubscribeButton from "../components/UnsubscribeButton"
import YesButton from "../components/YesButton"
import NoButton from "../components/NoButton"

const Username="Roro68"

const ProfilePage = () => {
  const [modalActive, setModalActive] = useState(false);
  const [modalActiveYes, setModalActiveYes] = useState(false);
  const [modalActiveNo, setModalActiveNo] = useState(false);

  const onClickYes=() => {
    setModalActive(false);
    setModalActiveYes(true)
  }

  const onClickNo=() => {
      setModalActive(false);
      setModalActiveNo(true)
  }

  return (

      <div className="h-screen flex flex-col ">
        <div className="h-1/6">
        <NavLink to="/" className=" flex font-bold justify-flex-start p-2 hover:shadow-inner">
          <img src={Left} alt="back" style={{ height: '20px', marginTop :'2px',marginRight:'3px'}}/>
          <a className=" text-l hover:decoration-double " alt="filters bar">
          BACK TO THE MAP
          </a>
        </NavLink>

        <h3 className="text-black box-border  font-bold text-4xl flex justify-center  ">
         "Welcome {Username}"</h3>
        </div>
        <div className="flex flex-col justify-between items-center h-5/6 ">
            <NavLink to="/upload">
                 <UploadLogo/>
              </NavLink>

              <ProfilePicture/>

          <NavLink to="/favorites">
            <button className=" rounded-lg border-slate-150 border-2 hover:shadow-md hover:text-blue-400 hover:shadow-inner  w-64 bg-white-300 text-blue-800  font-bold cursor-pointer text-l  p-1 flex justify-center ">
            My Favorites
            </button>
          </NavLink>

          <NavLink to="/uploaded">
            <button
            className=" rounded-lg border-slate-150 border-2 hover:shadow-md hover:shadow-inner hover:text-blue-400  w-64 bg-white-300 text-blue-800  font-bold cursor-pointer text-l p-1 flex justify-center ">
            My Uploaded
            </button>
          </NavLink>

          <NavLink to="/announcements">
            <button  className=" rounded-lg border-slate-150 border-2 hover:shadow-md hover:text-blue-400 hover:shadow-inner  w-64 bg-white-300 text-blue-800  font-bold cursor-pointer text-l  p-1 flex justify-center ">
            Annoucements
            </button>
          </NavLink>

          <NavLink to="/messages">
            <button  className="rounded-lg  border-slate-150 border-2 hover:shadow-md hover:text-blue-400 hover:shadow-inner  w-64 bg-white-300 text-blue-800  font-bold cursor-pointer text-l p-1 flex justify-center ">
            My Messages
            </button>
          </NavLink>

          <NavLink to="/logout">
            <button className="  rounded-lg border-slate-150 hover:shadow-md hover:bg-blue-900 hover:shadow-inner w-64 bg-blue-800 text-white font-bold cursor-pointer text-l  p-1 flex justify-center ">
            Logout
            </button>
          </NavLink>

        </div>

        <footer className="h-1/12 flex justify-center items-end ">
          <UnsubscribeButton setActive={setModalActive} />

          <Modal active={modalActive} setActive={setModalActive}>
            <p className="flex justify-center py-5 text-base">Are you sure you want to unsubscribe from EmptyUp ? </p>

            <div className="flex px-10 py-5 justify-around">
              <YesButton onClick={onClickYes}/>
              <NoButton onClick={onClickNo}/>
            </div>
          </Modal>

          <Modal active={modalActiveYes} setActive={setModalActiveYes}>
            <p className="flex justify-center py-5 text-base">You have sucessfully unsubscribe from EmptyUp! </p>
          </Modal>
        </footer>
      </div>
        )
    }

    export default ProfilePage




/*<div className=" hover:shadow-inner hover:shadow-md cursor-pointer w-32 h-32 rounded-full flex-col flex items-center justify-center  px-5 bg-slate-300 flex ">
                 <UploadPicto/>
                 <p className="text-black flex items-center text-xs font-bold px-2 text-center w-30">
                 Upload a new profile picture !
                 </p>
                 </div>*/
