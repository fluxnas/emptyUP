import DB from "./DB.mjs"

const dbConnect = async () =>{
    try {
        await DB.connect()
        console.log('DB connected succesfuly')
    } catch ( err ) {
        console.log( ` connexion failed ${ err }`)
    }
}

export default dbConnect