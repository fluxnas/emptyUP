import express from "express"
import * as dotenv from "dotenv"
import dbConnection from "./controller/dbConnect.mjs"
import indexRouter from "./routes/index.mjs"
import usersRouter from "./routes/users.mjs"




dotenv.config()
const server = express()
const PORT = 5000
// connexion to DB  
dbConnection()
// JSON
server.use(express.urlencoded({extended: true}))
server.use(express.json())
// Server side browser 5000
server.use('/', indexRouter)
server.use('/users', usersRouter)




server.listen(PORT, () => console.log(`Backend running on port: ${PORT}`))
