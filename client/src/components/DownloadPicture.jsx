import { useState, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const DownloadPicture = ({ submit }) => {

  const [image, setImage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault()
  const imageToProcess = e.target[0].files[0];
  let newImage = URL.createObjectURL(imageToProcess);
  setImage(newImage);

    const formData = new FormData();
    formData.append("image", image);

    console.log(formData);

    axios
      .post("/api/user/profilpicture", formData)
      .then((response) => {
        console.log("photo uploaded");
      })
      .catch((error) => {
        console.log(error);
      });

  };
  return (

      <Form
        onSubmit={onSubmit}
        className="h-full w-full flex flex-col items-center justify-center"
      >
        <h2 className="text-xl">Download a profile picture: </h2>
        <Form.Group className="flex justify-center " controlId="image">
          <Form.Control
            type="file"
            onChange={(event) => {
              if (event.target.files && event.target.files[0]) {
                setImage(event.target.files[0]);
                //URL.createObjectURL(event.target.files[0])
              }
            }}
            />
            </Form.Group>
        <Button className="text-7xl" type="submit">+</Button>
      </Form>

  );
};
export default DownloadPicture;

