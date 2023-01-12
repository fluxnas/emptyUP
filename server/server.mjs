import express from "express";
import bodyParser from "body-parser"

import { getBuildings, getBuilding, addBuilding } from "./controllers/buildings.mjs";
import { dbConnect } from "./models/dbConnect.mjs"
// import cookie from "cookie-parser";
import dotenv from "dotenv"
import {pool} from "./models/dbPool.mjs"

dotenv.config()
dbConnect()

const server = express()

server.use(express.json())
server.use(bodyParser.urlencoded({ extended: true }));
// server.use(cookie(process.env.SECRET_JWT));
server.use(bodyParser.json());

server.get("/", (req, res) => {
    res.send("hello")
})

server.post("/api/addbuilding", addBuilding )
server.get("/api/building", getBuilding)



server.listen(5500, () => {
    console.log("app is runing");
  });