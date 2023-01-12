import { NavLink } from 'react-router-dom'
import Filters from '../assets/Filters.png';
import SearchButton from '../components/SearchButton'
import Modal from "../components/Modal";
import UserLogo from '../assets/user.svg'
import "../App.css"
import React, { useState } from 'react';

const Navigation = () => {
	const [modalActive, setModalActive] = useState(false);
	return (
		<div className="Navigation">
				<NavLink to="/filters"> 
					<img src= {Filters} alt="filters bar" style={{ height: '30px', }} />
				</NavLink>
				<SearchButton setActive={setModalActive} />
		 	<Modal active={modalActive} setActive={setModalActive}>
		 		<input value="text" />
		    </Modal>
				<NavLink to="/profile"> 
					<img src= {UserLogo} alt="filters bar" style={{ height: '30px', }} />
				</NavLink>
		</div>	
		)
}

export default Navigation