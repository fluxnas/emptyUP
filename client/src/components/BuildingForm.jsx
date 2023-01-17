import { useState, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { LeafletContainer } from "../maps/formMap/leaflet-container";
import { LeafletMap } from "../maps/formMap/leaflet-map";
import { Popup } from "react-leaflet";

const BuildingForm = ({ submit }) => {
  const inputRefCity = useRef();
  const inputRefZipcode = useRef();
  const inputRefAddress = useRef();
  const inputRefType = useRef();
  const inputRefDate = useRef();
  const [image, setImage] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: 0, lon: 0 });
  //const [marker, setMarker] = useState([]);
  const [popup, setPopup] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const newBuilding = {
      image,
      city: inputRefCity.current.value,
      zipcode: inputRefZipcode.current.value,
      address: inputRefAddress.current.value,
      position: [coordinates.lat, coordinates.lon],
      type: inputRefType.current.value,
      dateofpost: inputRefDate.current.value
      //admin_id
    };
    console.log(newBuilding);
    // submit(newBuilding);

    const address =
      inputRefZipcode.current.value +
      " " +
      inputRefAddress.current.value +
      ", " +
      inputRefCity.current.value;

    axios
      .get(
        `https://nominatim.openstreetmap.org/search?q=${address}&format=json&limit=1`
      )
      .then((response) => {
        console.log(response.data[0]);
        const { lat, lon } = response.data[0];
        setCoordinates({ lat, lon });
      });
      // const formData = new FormData();
      // formData.append('file', image);
      // formData.append('upload_preset', 'your_upload_preset');
      // formData.append('cloud_name', 'dbi2upcex');
      // formData.append('api_key', '814837794796234');
      
      const formData = {
        file: image,
        cloud_name: 'dbi2upcex',
        api_key: '814837794796234'
      }

      console.log(formData)
      console.log(image)
  
      const config = {
        headers: { 'Content-Type': 'multipart/form-data' }
      };
  

    const res = axios.post(
      'https://api.cloudinary.com/v1_1/dbi2upcex/image/upload',
      formData,
      config
    );
  };
  return (
    <div className="h-full w-full flex flex-col">
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="image">
          <Form.Label>Image: </Form.Label>
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
        <Form.Group controlId="city">
          <Form.Label>City: </Form.Label>
          <Form.Control
            type="text"
            ref={inputRefCity}
            placeholder="Enter your city"
          />
        </Form.Group>
        <Form.Group controlId="zipcode">
          <Form.Label>Zipcode: </Form.Label>
          <Form.Control
            type="text"
            ref={inputRefZipcode}
            placeholder="Enter your zipcode"
          />
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Address: </Form.Label>
          <Form.Control
            type="text"
            ref={inputRefAddress}
            placeholder="Enter your address"
          />
        </Form.Group>
        <Form.Group controlId="typeSelect">
          <Form.Label>Type: </Form.Label>
          <select ref={inputRefType}>
            <option value="All"></option>
            <option value="Housing">Housing</option>
            <option value="Gardens">Gardens</option>
            <option value="Factories">Factories</option>
            <option value="Offices">Offices</option>
            <option value="Multiple">Multiple</option>
          </select>
        </Form.Group>
        <Form.Group controlId="date">
          <Form.Label>Date: </Form.Label>
          <Form.Control
            type="date"
            ref={inputRefDate}
          />
        </Form.Group>
        <Button type="submit">Add a building</Button>
      </Form>
      {coordinates.lat !== 0 && coordinates.lon !== 0 && (
        <LeafletContainer
          className="buildingFormMap"
          center={[coordinates.lat, coordinates.lon]}
          zoom={13}
        >
          <LeafletMap coordinates={coordinates} onClick={() => setPopup(true)}>
            <Popup className="popup">
              {image && (
                <img
                  src={image}
                  alt="selected photo"
                  style={{ width: "150px", height: "150px" }}
                />
              )}
              <p>City: {inputRefCity.current.value}</p>
              <p>Zipcode: {inputRefZipcode.current.value}</p>
              <p>Address: {inputRefAddress.current.value}</p>
              <p>Type: {inputRefType.current.value}</p>
              <p>Date: {inputRefDate.current.value}</p>
            </Popup>
          </LeafletMap>
        </LeafletContainer>
      )}
    </div>
  );
};
export default BuildingForm;
