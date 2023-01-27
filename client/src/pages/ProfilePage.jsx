import ReactDOM from 'react-dom'
import Navigation from "../components/Navigation";
import UploadPicto from "../components/UploadPicto"
import { NavLink } from 'react-router-dom'
import UserLogo from "../assets/user.svg";
import Left from "../assets/Left.svg";
import Heart from "../assets/heart.svg";
import Megaphone from "../assets/Megaphone.svg";
import MessageIcon from "../assets/MessageIcon.svg";
import uploadpicto from "../assets/uploadpicto.png"

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
       <NavLink to="/" className="flex  box-border font-bold  p-3 hover:shadow-inner">
              <img src={Left} alt="back" className="flex box-border" style={{ width: '30px',height: '30px', marginTop :'2px',marginRight:'3px'}}/>
              <a className=" text-l hover:decoration-double text-left " alt="filters bar">
              BACK TO MAP
              </a>
        </NavLink>

        <h3 className="text-black box-border cursor-default font-bold text-5xl  flex justify-center  ">
         WELCOME {Username}</h3>
        </div>
        <div className="flex justify-between items-center h-5/6 pt-2">
          <div className="my-3 truncate overflow: hidden; bg-cover  h-full w-1/2 bg-no-repeat" style={{ backgroundImage:"url('images/Pp.png')" }}>
          </div>

          <div className="flex h-full w-1/2 flex-wrap justify-between px-10">

            <NavLink to="/favorites" className="h-1/4">
            <button className=" w-40 h-full text-black mr-1 bg-white hover:bg-blue-800 hover:text-white  font-bold cursor-pointer  p-2 flex flex-col justify-around items-start ">
            <p className="text-sm "> SEE YOUR</p>
            <img src={Heart} alt="back" className="flex box-border" style={{ height: '30px', marginTop :'2px'}}/>
            <h4 className="text-2xl "> FAVORITES  </h4>
            <p className="text-sm "> SPACES </p>
            </button>
            </NavLink>

            <NavLink to="/uploaded" className="h-1/4">
              <button className=" h-full text-black bg-white mr-1 w-40 hover:bg-blue-800 hover:text-white  font-bold cursor-pointer  p-2 flex flex-col justify-around items-start ">
            <p className="text-sm "> SEE YOUR</p>
            <img src={uploadpicto} alt="upload" className="flex box-border" style={{ height: '30px', marginTop :'2px'}}/>
            <h4 className="text-2xl "> UPLOADED  </h4>
            <p className="text-sm "> SPACES </p>
            </button>
            </NavLink>

            <NavLink to="/announcements" className="h-1/4">
              <button className=" h-full text-black bg-white w-40 mr-1 hover:bg-blue-800 hover:text-white  font-bold cursor-pointer  p-2 flex flex-col justify-around items-start ">
            <p className="text-sm "> SEE THE</p>
            <img src={Megaphone} alt="megaphone" className="flex box-border" style={{ height: '30px', marginTop :'2px'}}/>
            <h4 className="text-2xl "> POSTS  </h4>
            <p className="text-sm text-left ">OF COMMUNITY </p>
            </button>
            </NavLink>

            <NavLink to="/messages" className="h-1/4">
              <button className="h-full  w-40 text-black bg-white mr-1 hover:bg-blue-800 hover:text-white  font-bold cursor-pointer  p-2 flex flex-col justify-around items-start">
            <p className="text-sm "> SEE YOUR</p>
            <img src={MessageIcon} alt="message" className="flex box-border" style={{height: '30px', marginTop :'2px'}}/>
            <h4 className="text-2xl "> DISCUSSIONS  </h4>
             <p className="text-sm text-left ">WITH COMMUNITY </p>
              </button>
            </NavLink>

            <div className=" h-1/4 w-full flex justify-between">
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

          <NavLink to="/logout" className="w-40 h-full" >
              <button className="  h-full w-full hover:text-black hover:bg-white bg-blue-800 text-white uppercase font-bold cursor-pointer  flex flex-col justify-around items-center ">
              Logout
            </button>
          </NavLink>
          </div>
          </div>
        </div>

        <footer className="h-1/12 flex justify-center  ">
        <UploadLogo/>
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
