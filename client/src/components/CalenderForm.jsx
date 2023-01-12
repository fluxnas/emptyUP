import "../App.css"

const CalenderForm = ({setActive}) => {
	return (
		<div>CREATED 
			<input type="text" onClick={() => setActive(true)}/>
		</div>	
		)
}

export default CalenderForm
