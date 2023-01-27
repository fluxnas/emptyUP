import { pool } from "../models/dbPool.mjs";

export const getMessages = async ( req, res ) =>{
    const user_id = req.decoded
    try {
        const allMessages = await pool.query(
            "SELECT * FROM messages where user_id = $1", 
            [user_id]
        );
        res.json(allMessages.rows)
    } catch (error) {
        console.error( error.message)
    }
}

export const getLastMessage = async (req, res) => {
    const user_id = req.decoded
    try{
        const lastMessage = await pool.query(
            "SELECT content FROM messages ORDER BY id DESC LIMIT 1 where user_id = $1",
            [user_id]
        )
        return res.json(lastMessage.rows)
    }catch (error) {
        console.error( error.message)
    }
}

export const postMessage = async (req, res) => {
    const user_id = req.decoded
    const { content } = req.body
    const hours = (new Date().getHours() + " : " + new Date().getMinutes()) 
    const date = new Date() + hours 
    try{
    await pool.query("INSERT INTO messages (user_id, content, date)")
    } catch(error){
        console.error(error)
    }


}

export const deleteMessage = (req, res) => {

}