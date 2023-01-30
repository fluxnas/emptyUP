import { pool } from "../models/Client.mjs"

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