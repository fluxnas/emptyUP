import { pool } from "../models/Client.mjs"


// all likes
export const allLikes = async ( req, res ) =>{
    try {
        const likes = await pool.query(
            "SELECT * FROM like_per_building" 
        )
    } catch (err) {
        console.error( err.message )
    }
}
// create like
export const createLike = async ( req, res ) =>{
    try {
        const { building_id, user_id } = req.body
        const newLike = await pool.query(
            "INSERT INTO like_per_building ( building_id, user_id )  VALUES ( $1, $2 ) RETURNING *",
            [ building_id, user_id]
        )
        res.json(newLike.rows[0])
    } catch (err) {
        console.error( err.message )
    }
}
// delete like
export const deleteLike = async ( req, res ) =>{
    try {
        const eraseLike = await pool.query(
            "DELETE * FROM like_per_building WHERE id = $1"
        )
        res.json("U did remove your like")
    } catch (err) {
        console.error( err.message )
    }
}