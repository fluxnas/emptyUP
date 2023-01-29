import { NavLink } from 'react-router-dom'
import Heart from "../assets/heart.svg";
import Megaphone from "../assets/Megaphone.svg";
import MessageIcon from "../assets/MessageIcon.svg";
import uploadpicto from "../assets/uploadpicto.png"
import ProfilePicture from "../components/ProfilePicture"
import LogoutButton from "../components/LogoutButton"
import Logo from "../components/Logo";
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

  const onClickYes=() => {
    setModalActive(false);
    setModalActiveYes(true)
  }

  const onClickNo=() => {
  }

  return (

      <div className="h-screen font-custom1  w-screen flex flex-col box-border ">
        <div className="flex h-1/12 w-full box-border justify-between px-5 pt-5 ">
          <Logo/>
          <LogoutButton/>
        </div>
        <h3 className="font-custom1 border-box cursor-default text-black box-border h-1/6 font-bold text-5xl flex items-center justify-center">
         WELCOME {Username}
        </h3>

        <div className="flex justify-between h-4/6 border-box pt-2">
          <div className="h-full w-1/2 flex flex-col  justify-between ">
            <div className="  display flex justify-center items-center">
              <button className="text-6xl m-3">
              +
              </button>
              <div className=" h-96 w-9 flex items-center truncate overflow: hidden; rounded-full">
              <ProfilePicture/>
              </div>
              </div>
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
          </div>


          <div className="flex h-full w-1/2 flex-wrap justify-between px-28 pb-10">

            <NavLink to="/favorites" className="">
            <button className=" border h-48 w-48 shadow rounded-xl mr-1 hover:bg-blue-800 hover:text-white font-bold cursor-pointer p-2 flex flex-col justify-around items-center">
            <p className="text-sm  "> SEE YOUR</p>
            <img src={Heart} alt="back" className="flex box-border" style={{ height: '30px', marginTop :'2px'}}/>
            <h4 className="text-2xl  "> FAVORITES  </h4>
            <p className="text-sm "> SPACES </p>
            </button>
            </NavLink>

            <NavLink to="/uploaded" className="">
              <button className="border h-48 w-48 shadow rounded-xl mr-1 hover:bg-blue-800 hover:text-white font-bold cursor-pointer p-2 flex flex-col justify-around items-center">
            <p className="text-sm  "> SEE YOUR</p>
            <img src={uploadpicto} alt="upload" className="flex box-border" style={{ height: '30px', marginTop :'2px'}}/>
            <h4 className="text-2xl  "> UPLOADED  </h4>
            <p className="text-sm  "> SPACES </p>
            </button>
            </NavLink>

            <NavLink to="/announcements" className="">
              <button className=" border h-48 w-48 shadow rounded-xl mr-1 hover:bg-blue-800 hover:text-white font-bold cursor-pointer p-2 flex flex-col justify-around items-center">
            <p className="text-sm "> SEE THE</p>
            <img src={Megaphone} alt="megaphone" className="flex box-border" style={{ height: '30px', marginTop :'2px'}}/>
            <h4 className="text-2xl "> POSTS  </h4>
            <p className="text-sm text-left  ">OF COMMUNITY </p>
            </button>
            </NavLink>

            <NavLink to="/discussions">
              <button className=" border h-48 w-48 shadow rounded-xl mr-1 hover:bg-blue-800 hover:text-white font-bold cursor-pointer p-2 flex flex-col justify-around items-center">
            <p className="text-sm"> SEE YOUR</p>
            <img src={MessageIcon} alt="message" className="flex box-border" style={{height: '30px', marginTop :'2px'}}/>
            <h4 className="text-2xl "> DISCUSSIONS  </h4>
             <p className="text-sm text-left">WITH COMMUNITY </p>
              </button>
            </NavLink>

          </div>
        </div>
        <footer className="h-1/12 pt-4 flex justify-center">
          <NavLink to="/upload">
            <UploadLogo />
          </NavLink>
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
