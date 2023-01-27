const UnsubscribeButton = ({setActive}) => { 
        return (
                <button  onClick={() => setActive(true)} className=" flex items-end hover:underline text-black  border-0 text-left text-bottom text-xs font-medium focus:outline-none focus:ring-2 focus:ring-grey-700" >Unsubscribe from EmptyUp
                </button>)
}

export default UnsubscribeButton
