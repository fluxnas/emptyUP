import express from "express";
import bodyParser from "body-parser"

import { getBuildings, getBuilding, addBuilding } from "./controllers/buildings.mjs";
import { dbConnect } from "./models/dbConnect.mjs"
import cookie from "cookie-parser";
import dotenv from "dotenv"
import {register, login } from "./controllers/users.mjs"
import jwtAuthentification from "./middleware/verifyToken.mjs";


dotenv.config()
dbConnect()

const server = express()

server.use(express.json())
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cookie(process.env.SECRET_JWT));
server.use(bodyParser.json());

server.get("/", (req, res) => {
    res.send("hello")
})

// user related endpoints
server.post("/api/user/register", register)
server.post("/api/user/login", login)

// buildings related endpoints
server.post("/api/addbuilding", jwtAuthentification ,addBuilding )
server.get("/api/building", getBuilding)


server.listen(5500, () => {
    console.log("app is runing");
  });