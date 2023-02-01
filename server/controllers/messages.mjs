import { pool } from "../models/dbPool.mjs";

export const getMessages = async ( req, res ) =>{
    const user_id = req.userId
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
    const user_id = req.userId
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
    const user_id = req.userId
    const { content } = req.body
    const hours = (new Date().getHours() + " : " + new Date().getMinutes()) 
    const date = new Date() + hours 
    try{
        const discussion = await pool.query("SELECT * from discussion where id = $1",
        [req.params.id])  // endpoint => :id => discussion id 
        const user = discussion.rows[0].user_id
        const discussion_id = discussion.rows[0].id
        if(user === user_id) {
            // Insert the message into the messages table with the obtained discussion_id
            await pool.query("INSERT INTO messages (user_id, content, date, discussion_id) VALUES ($1, $2, $3, $4)", 
            [user_id, content, date, discussion_id]);
            return res.status(201).json({
                status: 'success',
                message: 'message posted',
                });
        }else{
            res.status(401).json({
                status: 'error',
                message: 'Unauthorized: User is not part of this discussion',
            });
        }
           
    }catch(error) {
        console.error(error);
        res.status(500).json({
            status: 'error',
            message: 'Error posting message',
        });
    }
}


export const deleteMessage = (req, res) => {
    

}