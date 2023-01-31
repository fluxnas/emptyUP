import { pool } from "../models/dbPool.mjs";

export const createDiscussion = async (req, res) => {
    const user1 = req.decoded
    const user2 = req.params.id
    const user_id = [ user1, user2]
    if( !user1 || !user2){
        return res.status(400).send({error :" no user found"})
    }

    try{
        const content = await pool.query(
            "SELECT content FROM messages ORDER BY id DESC LIMIT 1 where user_id = $1",
            [user_id]
        )
        await pool.query("INSERT INTO discussion (user_id, content) values ($1, $2)",
        [user_id, content])
        return res.status(201).send({ message: 'Discussion created successfully' })
    }catch(error){
        console.error(error)
        return res.status(500).send({ error: 'Internal server error' });

    }
}


export const deleteDiscussion = async (req, res) => { 
    const discussion_id = req.params.id    // => dans le endpoint donner le id de la discussion qu'on veut supprimer 
    const user = req.decoded
    const user_id = await pool.query("select user_id from discussion where id = $1",
    [discussion_id])
    if(user === user_id.rows[0].user_id){
        try{
            await pool.query("delete from discussion where id = $1",
            [discussion_id])
            return res.status(201).send({ message : 'Discussion deleted succesfully'})

        }catch(error){
            console.error(error)
            return res.status(500).send({ error : 'Internal server error'})

        }
    } else {
        return res.status(404).send({ error :'user not authorized'})
    }
}