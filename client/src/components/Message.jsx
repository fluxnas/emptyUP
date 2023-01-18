import { NavLink } from 'react-router-dom'
import ProfilePicture from "../components/ProfilePicture"
const Username="Roro68"
const date="07/12/22"
const Message = (props) => {
return(
	<li className="flex ">
				<button className="text-xl text-blue-800 bg-slate-300 mb-3 w-5" onClick={()=>props.delete(props.info.id)} > x
            	</button>
            {props.info.name}{""}
            <NavLink to="/message">
				<ProfilePicture /> 
				</NavLink> 
				<div className="flex flex-col  max-w-sm">
					<h5 className="text-blue-800 p-0 m-0">{Username} wrote on {date} :</h5>
					<p className="text-justify text-sm h-24 overflow-hidden ">
					nhrd ccnrh jbvhdkjfnjk n d ehrdccnrhjbvhdkjfnjk n d ehrdccnrh jbvhdk jfnjk n d ehr dccnrhjbv hdkjfnjk n d ehrdcc nrhjbvhdkjfnjk n d ehrdccnrh jbvhdkjfnjk n d eh fhbr brf n" fhr" f "hf h rfh rfh hf h fhf h fh' fh 'fh' fh fh 'fh fhthrvkj
					</p>
				</div>
				<button onClick={()=>props.delete(props.info.id)} > x
            	</button>
            {props.info.name}{""}
      		</li>
     )
}

export default Message




