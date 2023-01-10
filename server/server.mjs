import express from "express"
import * as dotenv from "dotenv"
import dbConnect from "./controller/dbConnect.mjs"


dotenv.config()
const server = express()
const PORT = 5000
// connexion to DB  
dbConnect()
// JSON
server.use(express.json())
// Server side browser 5000
server.get('/api/clients', ( req, res ) =>{
    const clients = [
        {id: 1, username: 'John', email: 'abc@gmail.com'},
        {id: 2, username: 'Jane', email: 'def@gmail.com'},
        {id: 3, username: 'Jeremy', email: 'ghi@gmail.com'}
    ]
    res.json(clients)
})

server.listen(PORT, () => console.log(`Backend running on port: ${PORT}`))
