import { pool } from "../models/pool.mjs"


//////////////////////// ALL COMMENTS FOR ONE BUILDING ////////////////////////////

export const comments = async (req, res) => {
    const admin_id = "5"
    await pool.query(
        "SELECT * FROM comments WHERE building_id=$1", 
        [admin_id], 
        (err, result)=> {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json(result.rows);
            }
        }
    )
}


//////////////////////// POST COMMENT ////////////////////////////
export const postComment = async (req, res) => {
    try {
    const {content} = req.body
    const dateofpost = new Date()
    // const user_id = "9"
    const building_id = "1"
    const user_id =  "6"
    await pool.query (
        "INSERT INTO comments (building_id, content, user_id, date) VALUES ($1, $2, $3, $4)", 
        [building_id, content, user_id, dateofpost] 
    )
    return res.send({info: "comment added"})
    }
    catch(error) {
        console.error(error.message)      
    }
}


//////////////////////// DELETE UN COMMENT ////////////////////////////
export const deleteComment = async () => { 
    try{    
    const {id} = req.params
    await pool.query(
        "DELETE * FROM comments WHERE users_id=$1",
        [id]
    )
    return res.send({info: "comment delete"})
    }
    catch{
        res.status(500).json({ error: err.message })
    }
}

//////////////////////// UPDATE UN COMMENT ////////////////////////////
export const updateComment = async() => {
    try {
        const {id} = req.params
        const content = req.body
        await pool.query (
            "UPDATE comments SET content = $1 WHERE id = $2",
            [content, id]
        )
        return res.send({info: "content update"})
    }
    catch {
        res.status(500).json({error: err.message})
    }
}