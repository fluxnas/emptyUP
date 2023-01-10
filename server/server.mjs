import express from "express";
import bodyParser from "body-parser"
import { dbConnect } from "./models/dbConnect.mjs"

dbConnect()

const server = express()

server.use(express.json())
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());



server.listen(5500, () => {
    console.log("app is runing");
  });