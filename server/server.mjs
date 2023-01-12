import express from "express"
import * as dotenv from "dotenv"
import dbConnection from "./controller/dbConnect.mjs"
import indexRouter from "./routes/index.mjs"
import usersRouter from "./routes/users.mjs"
import cloudinary from "cloudinary"
import bodyParser from "body-parser"





dotenv.config()
const server = express()
const PORT = 5000
// connexion to DB  
dbConnection()
// Body-Parser
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}))
// JSON
server.use(express.urlencoded({extended: true}))
server.use(express.json())
// cloudinary configuration
cloudinary.config({
    cloud_name: "dhk6oudef",
    api_key: "325937557113314",
    api_secret: "_hRXtyXyDRYTkRvvtTJ3L94ywnU"
})
// Server side browser 5000
server.use('/', indexRouter)
server.use('/users', usersRouter)




server.listen(PORT, () => console.log(`Backend running on port: ${PORT}`))
