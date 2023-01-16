import { pool } from "../models/Client.mjs"

// Likes
export const createLike = async ( req, res ) =>{
    try {
        const { building_id, user_id } = req.body
        const newLike = await pool.query (
            "INSERT INTO like_per_building ( building_id, user_id )  VALUES ( $1, $2 ) RETURNING *",
            [ building_id, user_id]
        )
        res.json(newLike.rows[0])
    } catch (err) {
        console.error( err.message )
    }
}
