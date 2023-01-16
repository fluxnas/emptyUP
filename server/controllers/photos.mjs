import { pool } from "../models/Client.mjs"
import cloudinary from "../middleware/cloudinary.mjs"


export const uploadImage = (req, res) => {
        const file = req.files.image
        cloudinary.uploader
        .upload(file.tempFilePath)
        .then(result => {
            console.log(result)
            const public_id = result.public_id
            const building_id = "2"
            console.log(public_id)
            res.send(public_id)
            pool.query("insert into images (cloudinary_id, image_url, building_id) values ($1, $2, $3) RETURNING *",
            [result.public_id, result.secure_url, building_id])
        })

        .catch(error => {
            console.log(error)
            res.send(error)
        });
}

// delete image
export const deleteUploadImage = async ( req, res ) =>{
    try{
        const { id } = req.params
        const deleteImage = await pool.query(
            "DELETE FROM images WHERE id = $1",
            [id]
        )
        res.json("Image has been deleted!")
    } catch ( err ) {
        console.error(err.message)
    }
}