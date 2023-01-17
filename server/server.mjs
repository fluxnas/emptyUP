import express from "express"
import bodyParser from "body-parser"
import cookie from "cookie-parser";
import * as dotenv from "dotenv"
import jwtauth from "./middleware/verifToken.mjs"
import fileUpload from "express-fileupload"
import { dbConnect }from "./models/dbConnect.mjs"
import { login, register } from "./controllers/reg-log.mjs"
import { createOneBuilding, deleteBuilding,getAdress, 
        getBuildings,getCity,getZipcode,oneBuilding, updateBuilding } from "./controllers/building.mjs";
import { createUser, deleteUser, getUsers, oneUser } from "./controllers/user.mjs";
import { createAnnonce, deleteAnnonce, getAnnonces, oneAnnonce, updateAnnonce } from "./controllers/annonces.mjs";
import { createLike } from "./controllers/likes.mjs"
import { uploadImage, deleteUploadImage } from "./controllers/photos.mjs";




dotenv.config()
const server = express()
const PORT = 5500
// connexion to DB  
dbConnect()
// Body-Parser
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}))
server.use(cookie(process.env.SECRET_JWT))
// JSON
server.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads',
    limits: { fileSize: 50 * 1024 * 1024 }
}));
server.use(express.urlencoded({extended: true, limit: '50mb'}))
server.use(express.json({limit: '50mb'}))
// Server side browser 5000
server.get('/', ( req, res ) =>{
    res.send("Hello")
})
// login
server.post('/api/login', login)
// register
server.post('/api/register', register)

// BUILDINGS
// all buildings
server.get('/api/buildings', getBuildings)
// one building
server.get('/api/building/:id', oneBuilding )
// building zipcode
server.get('/api/building/zipcode', getZipcode)
// building city
server.get('/api/building/city', getCity)
// building adress
server.get('/api/building/adress', getAdress)
// create building
server.post('/api/addbuilding', createOneBuilding)
// update building
server.put('/api/updatebuilding/:id', updateBuilding)
// delete building
server.delete('/api/deletebuilding', deleteBuilding)

// USERS
// create user
server.post('/api/adduser', createUser)
// see all users
server.get('/api/users', getUsers)
// one user
server.get('/api/user/:id', oneUser)
// delete user
server.delete('api/deleteuser', deleteUser)

// ANNONCES
// all annonces
server.get('/api/annonces', getAnnonces)
// create annonce
server.post('/api/addannonce', createAnnonce)
// one annonce
server.get('/api/annonce/:id', oneAnnonce)
// update annonce need token to make it work
server.put('/api/annonce/:id', updateAnnonce)
// delete annonce
server.delete('/api/annonce/:id', deleteAnnonce)
// create likes
server.post('/api/like', createLike)

// IMAGES
// upload images
server.post('/api/upload', uploadImage)
server.delete('/api/delupload/:id', deleteUploadImage)



    


server.listen(PORT, () => console.log(`Backend running on port: ${PORT}`))
