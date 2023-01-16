import express from "express";
import bodyParser from "body-parser"

import { getBuildings, getBuilding, addBuilding } from "./controllers/buildings.mjs";
import { dbConnect } from "./models/dbConnect.mjs"
import cookie from "cookie-parser";
import dotenv from "dotenv"
import {register, login } from "./controllers/users.mjs"
import { uploadImage } from "./controllers/images.mjs";
import jwtAuthentification from "./middleware/verifyToken.mjs";
import cloudinary from "cloudinary"
import multer from "multer";

dotenv.config()
dbConnect()
const storage = multer.memoryStorage();
const server = express()
server.use(multer({ storage: storage }).single('image'));




server.use(express.json())
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cookie(process.env.SECRET_JWT));

cloudinary.config({
    cloud_name: process.env.CLOUDI_NAME,
    api_key: process.env.CLOUDI_APIKEY,
    api_secret: process.env.CLOUDI_APISEC
    
})


server.get("/", (req, res) => {
    res.send("hello")
})

// user related endpoints
server.post("/api/user/register", register)
server.post("/api/user/login", login)

// buildings related endpoints
server.post("/api/addbuilding", jwtAuthentification ,addBuilding )
server.get("/api/building", getBuilding)

// images related endpoints
server.post("/api/building/uploadimage", uploadImage)




server.listen(5500, () => {
    console.log("app is runing");
  });