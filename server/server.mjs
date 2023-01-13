import express from "express"
import bodyParser from "body-parser"
import cookie from "cookie-parser";
import * as dotenv from "dotenv"
import jwtauth from "./middleware/verifToken.mjs"
import { dbConnect }from "./models/dbConnect.mjs"
import { login, register } from "./controllers/reg-log.mjs"
import { deleteBuilding,getAdress, 
        getBuildings,getCity,getZipcode,oneBuilding, updateBuilding } from "./controllers/building.mjs";
import { createUser, deleteUser, getUsers, oneUser } from "./controllers/user.mjs";


dotenv.config()
const server = express()
const PORT = 5000
// connexion to DB  
dbConnect()


// Body-Parser
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}))
// JSON
server.use(express.urlencoded({extended: true, limit: '50mb'}))
server.use(express.json({limit: '50mb'}))
// Server side browser 5000
server.get('/', ( req, res ) =>{
    res.send("Hello")
})
server.post('/api/user/login', login)
server.post('/api/user/register', register)
server.post('/api/addbuilding',jwtauth, getBuildings )
server.get('/api/buildings', getBuildings)
server.get('/api/buildings/:ID', oneBuilding )
server.get('/api/building/zipcode', getZipcode)
server.get('/api/building/city', getCity)
server.get('/api/building/adress', getAdress)
server.put('/api/user/updateuser/:ID', updateBuilding)
server.delete('/api/deletebuilding', deleteBuilding)
server.post('/api/user/adduser', createUser)
server.get('/api/user/users', getUsers)
server.get('/api/user/userid/:ID', oneUser)
server.delete('api/user/deleteuser', deleteUser)







server.listen(PORT, () => console.log(`Backend running on port: ${PORT}`))
