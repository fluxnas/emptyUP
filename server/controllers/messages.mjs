import { pool } from "../models/Client.mjs"

// create message
export const createMessage = async ( req, res ) =>{
    try {
        const { user_id, content, date, discussion_id } = req.body
        const newChat = await pool.query(
            "INSERT INTO messages ( user_id, content, date, discussion_id ) VALUES ( $1, $2, $3, $4 ) RETURNING *",
            [user_id, content, date, discussion_id]
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