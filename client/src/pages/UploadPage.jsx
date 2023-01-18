import "../App.css";
import BuildingForm from "../components/BuildingForm";

const UploadPage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <BuildingForm />
    </div>
  );
};

export default UploadPage;
// const BuildingForm = () => {
//   const [image, setImage] = useState("");

//   const onSubmit = (e) => {
//     e.preventDefault();
// const formData = new FormData();
//     formData.append('image', image);
//     console.log(image);
//     console.log(formData);

 
//      axios.post('/api/building/uploadimage', newBuilding)
//     .then(response => {
//         console.log(response);
//     })
//     .catch(error => {
//         console.log(error);
//     });
//   };
//   return (
//     <div className="h-full w-full flex flex-col">
//       <Form onSubmit={onSubmit}>
//         <Form.Group controlId="image">
//           <Form.Label>Image: </Form.Label>
//           <Form.Control
//             type="file"
//             onChange={(event) => {
//               if (event.target.files && event.target.files[0]) {
//                 setImage(event.target.files[0]);
//               }
//             }}
//           />
       
//        </Form.Group>
//        </Form>
//       )}
//     </div>
//   );
// };
// export default BuildingForm;
