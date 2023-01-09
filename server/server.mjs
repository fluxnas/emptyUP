import express from "express"
import * as dotenv from "dotenv"
dotenv.config()
const server = express()
const PORT = 3000

server.use(express.json())
// Json browser
server.get('/', ( req, res ) =>{
    res.send({ message:"welcome"})
})

server.listen(PORT, () => console.log(`Backend running on port: ${PORT}`))
