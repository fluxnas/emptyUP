import { useState, useRef } from "react";
import axios from "axios";
const apiUrl = '/api/annonces';

export const  DownloadPicture = () => {
const [showPicture, setshowPicture] = useState("");
const formRef = useRef(null)

const req = async () => {
try {
const response = await axios.get(apiUrl, {
        headers: {
          "ngrok-skip-browser-warning": "69420"
        }
      });
console.log (response)
const dat = response.data.data
const newPicture = dat.map(picture => {
const content = picture.value;
const id = picture.id;
return { id, content};
});
setshowPicture(newPicture)
}
catch (error) {
console.log(error);
}

}

const onSubmit =(evt) => {
  evt.preventDefault()
  const imageToProcess = evt.target[0].files[0];
  let newPicture = URL.createObjectURL(imageToProcess);
  setshowPicture(newPicture);
  if(!formRef) {
    return
  }
  fetch(formRef.current.action, {
    method: formRef.current.method,
    body: new FormData(formRef.current)
  })
}
const processImage= () =>{

}

return(
<div className="w-full h-full flex  p-0 ml-8 items-center justify-center">
<form className=" w-full h-full flex justify-center flex-col" ref={formRef} action="" method="POST" onSubmit={onSubmit}>
  <input className="flex flex-col items-center text-xs text-center p-0 m-0 " id="fil-upload"
  type="file"
  name="file"
  />
  <button className="text-7xl hover:drop-shadow-xl hover:text-blue-800"
  type="submit">
  +
  </button>
</form>
<div className="h-full display flex items-center">
<div className="h-72 w-72 border shadow overflow:hidden rounded-full truncate ">
  <img src= {showPicture}  className=" scale-100  origin-top font-Custom1" />
</div>
</div>
</div>

  )


}
export default DownloadPicture
