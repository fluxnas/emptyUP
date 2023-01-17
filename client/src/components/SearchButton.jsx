import "../App.css"
import Loupe from '../assets/loupe.png';

const SearchButton = ({setActive}) => {
	return (
		<div>
		<img src= {Loupe} alt="logo search" className="hover:scale-125" style={{ height: '30px', }} onClick={() => setActive(true)} />
		</div>	
		)
}

export default SearchButton
