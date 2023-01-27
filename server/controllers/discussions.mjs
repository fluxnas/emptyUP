import { pool } from "../models/dbPool.mjs";

export const createDiscussion = async (req, res) => {
    const user1 = req.decoded
    const user2 = req.params.id
    const user_id = [ user1, user2]
    if( !user1 || !user2){
        return res.status(400).send({error :" no user found"})
    }

    try{
        const discussion = await pool.query("INSERT INTO discussion (user_id) values ($1)",
        [user_id])
        return res.status(201).send({ message: 'Discussion created successfully' })
    }catch(error){
        console.error(error)
        return res.status(500).send({ error: 'Internal server error' });

    }
}