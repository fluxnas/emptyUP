  import logonotext from '../assets/logonotext.png';
import { NavLink } from 'react-router-dom'
const Logo = () => {
  return (
    <NavLink to="/" className="  flex items-center h-full box-border ml-4 text-l font-bold">
    <img src= {logonotext} alt="logo" className=" h-8" />
          <p className="ml-2 hover:drop-shadow-xl font-custom2 text-2xl text-left " alt="back to map">
          Empty.up
          </p>

        </NavLink>
    )
}

export default Logo




