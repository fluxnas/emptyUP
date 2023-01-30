import { pool } from "../models/Client.mjs"

<<<<<<< HEAD
// All messages
export const getMessages = async ( req, res ) =>{
    try {
        const allMessages = await pool.query(
            "SELECT * FROM messages"
        )
        res.json(allMessages.rows)
    } catch (error) {
        console.error( error.message)
    }
}

// get one user's messages 
export const getUserLastMessage = async ( req, res ) =>{
    try {
        const {user_id} = req.decoded
    const lastMessage = await pool.query(
        "SELECT content FROM messages WHERE user_id =  ORDER BY id DESC LIMIT $1",
        [user_id]
    )
    res.json(lastMessage.rows)
    } catch (error) {
        console.error(error.message)
    }
} 
=======

// all messages
export const getMessages = async ( req, res ) =>{
    try {
        const allMessages = await pool.query("SELECT FROM messages")
        console.log(allMessages.rows ) 

            if ( allMessages.rows.length === 0 ) {
                return res.status(400)
                .json({ message: "No data to be desplayed"})
            }
            return res.status(200)
            .json(allMessages.rows)
        } catch (err){
            console.error(err.message)
        }
    }

// one message
export const getOneMessage = async ( req, res ) =>{ 
    const { id } = req.params.id
    if ( !id ) {
        res.status(400)
        .send("no ID provided")
    }
    try {
        const query = await pool.query(
            "SELECT * FROM messages WHERE id = $1",
            [id]
        )
        console.log(query)
    if (query.rows.length === 0) {
        return res.status(404)
        .send("no message found")
    }
    return res.status(200)
    .json(query.rows)
    } catch (err) {
        console.error(err.message)
    }
}

// create message
export const createMessage = async ( req, res ) =>{
    try {
        const date = new Date()
        const discussion_id = "3"
        const { user_id, content, admin } = req.body
        const newChat = await pool.query(
            "INSERT INTO messages ( user_id, content, date, discussion_id, admin ) VALUES ( $1, $2, $3, $4, $5 ) RETURNING *",
            [user_id, content, date, discussion_id, admin]
        )
        res.json(newChat.rows[0])
    } catch (err) {
        console.error(err.message)
    }
}

// delete message
export const deleteMessage = async ( req, res ) =>{
    try {
        const { id } = req.params
        const delMessage = await pool.query(
            "DELETE * FROM messages WHERE id = $1",
            [id]
        )
        res.json("Message has been deleted")
    } catch (err) {
        console.error( err.message)
    }
}
>>>>>>> 1d9ef52e7af7d56c7b2441f73a30b45fcee07a92
