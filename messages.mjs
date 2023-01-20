import { pool } from "../models/Client.mjs"


// all messages
export const getMessages = async ( req, res ) =>{
    try {
        const allMessages = await pool.query(
            "SELECT FROM messages"
        )
        res.json(allMessages.rows)
    } catch (err) {
        console.error( err.message)
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