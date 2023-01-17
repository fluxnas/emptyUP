import express from "express";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";


import {
  getBuildings,
  getBuilding,
  addBuilding,
} from "./controllers/buildings.mjs";


import { dbConnect } from "./models/dbConnect.mjs";
import cookie from "cookie-parser";
import dotenv from "dotenv";
import { register, login } from "./controllers/users.mjs";
import { uploadImage } from "./controllers/imagesUpload.mjs";
import jwtAuthentification from "./middleware/verifyToken.mjs";
import * as cloudinary from "cloudinary";



dotenv.config();
dbConnect();
const server = express();


server.use(express.json());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cookie(process.env.SECRET_JWT));
server.use(fileUpload({
    useTempFiles: true,
    limits: {fileSize: 50 * 2024 * 1024}
}))

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});



server.get("/", (req, res) => {
  res.send("hello");
});

// user related endpoints
server.post("/api/user/register", register);
server.post("/api/user/login", login);

// buildings related endpoints
server.post("/api/addbuilding", jwtAuthentification, addBuilding);
server.get("/api/building", getBuilding);

// images related endpoints
server.post("/api/building/uploadimage", uploadImage);

server.listen(5500, () => {
  console.log("app is runing");
});
