const UnsubscribeButton = ({setActive}) => { 
        return (
                <button  onClick={() => setActive(true)} className=" hover:underline text-black  border-0 px-8  text-xs font-medium focus:outline-none focus:ring-2 focus:ring-grey-700" >Unsubscribe from EmptyUp
                </button>)
}

export default UnsubscribeButton
