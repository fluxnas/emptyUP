import express from "express";
import bodyParser from "body-parser"
import { getUsers } from "./controllers/users.mjs"
import { getBuildings, getBuilding, addBuilding } from "./controllers/buildings.mjs";
import { dbConnect } from "./models/dbConnect.mjs"
import {pool} from "./models/dbPool.mjs"

dbConnect()

const server = express()

server.use(express.json())
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.get("/", (req, res) => {
    res.send("hello")
})
server.get("/api/users", getUsers )
server.post("/api/addbuilding", addBuilding )
server.get("/api/building", getBuilding)



server.listen(5500, () => {
    console.log("app is runing");
  });