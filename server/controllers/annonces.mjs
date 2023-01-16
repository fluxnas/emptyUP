import { pool } from "../models/Client.mjs"

// All annonces
export const getAnnonces = async ( req, res ) =>{
    try {
        const allAnnonces = await pool.query(
            "SELECT * FROM annonces"
        )
        res.json(allAnnonces.rows)
    } catch ( err ) {
        console.error(err.message)
    }
}

// create annonce
export const createAnnonce = async ( req, res ) =>{
    try {
        const { user_id, content, date } = req.body
        const newAnnonce = await pool.query (
            "INSERT INTO annonces ( user_id, content, date ) VALUES ( $1, $2, $3 ) RETURNING *",
            [ user_id, content, date ]
        )
        res.json(newAnnonce.rows[0])
    } catch ( err ) {
        console.error( err.message )
    }
}

// get one annonce
export const oneAnnonce = async ( req, res ) =>{
    const { id } = req.params
    try {
        const annonce = await pool.query ( 
            "SELECT * FROM annonces WHERE id = $1",
            [ id ]
        )
        res.json(annonce.rows[0])
    } catch ( err ) {
        console.error(err.message)
    }
}

// update an annonce
export const updateAnnonce = async ( req, res ) =>{
    try {
        const { id } = req.params
        const { content } = req.body
        const update = await pool.query (
            "UPDATE annonces SET content = $1 WHERE is = $2",
            [ id, content ]
        )
        res.json("annonce updated successfully")
    } catch ( err ) {
        console.error ( err.message )
        res.status( 500 ).json("Error updating annonce")
    }
}

// delete annonce
export const deleteAnnonce = async ( req, res ) =>{
    try {
        const { id } = req.params
        const deleteAnnonce = await pool.query (
            "DELETE FROM annonces WHERE id = $1",
            [id]
        )
        res.json("annonce has been deleted!")
    } catch ( err ) {
        console.error( err.message )
        res.status(500).json("Error deleting annonce ")
    }
}