import express from "express";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";


import {
  getBuildings,
  getBuilding,
  addBuilding,
  getUserAdminBuildings,
  deleteBuilding
} from "./controllers/buildings.mjs";

import{
    postAnnonces, 
    getAllAnnonces,
    getOneAnnonce,
    deleteAnnonce,
    updateAnnonce,
    
} from "./controllers/annonces.mjs"

import { cloudinaryConfig } from "./models/cloudinaryconfig.mjs";

import { dbConnect } from "./models/dbConnect.mjs";
import cookie from "cookie-parser";
import dotenv from "dotenv";
import { register, login,  uploadProfilPicture, unsubscribeUser, logout, getInfoUsers } from "./controllers/users.mjs";
import { uploadImage  } from "./controllers/images.mjs";
import jwtAuthentification from "./middleware/verifyToken.mjs";
import * as cloudinary from "cloudinary";



dotenv.config();
dbConnect();
const server = express();
cloudinaryConfig();


server.use(express.json());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cookie(process.env.SECRET_JWT));
server.use(fileUpload({   
    useTempFiles: true,
    limits: {fileSize: 50 * 2024 * 1024}
}))


// user related endpoints
server.post("/api/user/register", register);
server.post("/api/user/login", login);
server.get("/api/user/profil/:id", getInfoUsers)
server.post("/api/user/profilpicture", uploadProfilPicture) 
server.delete("/api/user/unsubscribe/:id", jwtAuthentification, unsubscribeUser)
server.get("/api/user/logout", jwtAuthentification, logout)
server.get("/api/user/mybuildings/:id", getUserAdminBuildings )

// buildings related endpoints
server.post("/api/addbuilding",jwtAuthentification ,addBuilding); 
server.get("/api/buildings",getBuildings);
server.get("/api/building",getBuilding);
server.get("/api/buildings/:id", )
server.delete("/api/building/delete/:id", deleteBuilding)

// images related endpoints
server.post("/api/building/uploadimage", uploadImage);  

// announcement
server.post("/api/annonces/add", postAnnonces)
server.get("/api/annonces", getAllAnnonces)
server.get("/api/annonces/:id", getOneAnnonce)
server.put("/api/annonces/update", updateAnnonce)
server.delete("/api/annonces/:id", deleteAnnonce)


server.listen(5500, () => {
  console.log("app is runing")

});
