import client from "./Client.mjs"


const dbConnect = async () =>{
    try {
        await client.connect()
        console.log('DB connected succesfuly')
    } catch ( err ) {
        console.log( ` connexion failed ${ err }`)
    }
}

export default dbConnect