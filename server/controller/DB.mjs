import pgkg from "pg"
import * as dotenv from "dotenv"
dotenv.config()

const DB = new pgkg.Client({
    user: "empty_up_db_admin",
    host: 'localhost',
    database: 'empty_up_db',
    password: "123456",
    port: 5432,
})

export default DB