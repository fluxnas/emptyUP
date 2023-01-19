import { pool } from "../models/dbPool.mjs";
import { v2 as cloudinary } from "cloudinary";

// export const uploadImage = (req, res) => {
//     const file = req.files.image
//     cloudinary.uploader
//     .upload(file.tempFilePath)
//     .then(result => {
//         console.log(result)
//         const public_id = result.public_id
//         const building_id = "2"
//         console.log(public_id)
//         res.send(public_id)
//         pool.query("insert into images (cloudinary_id, image_url, building_id) values ($1, $2, $3) RETURNING *",
//         [result.public_id, result.secure_url, building_id])
//     })
    
//     .catch(error => {
//         console.log(error)
//         res.send(error)
//     });
// }




export const uploadImage = async (req, res) => {
    const file  = await req.files.image
    try{
        const result = await cloudinary.uploader.upload(file.tempFilePath)
        console.log(result.public_id)
        const public_id = result.public_id
        const admin_id = "2"
        const building = await pool.query("select id from buildings where admin_id = $1", [admin_id])
        const building_id = building.rows[0].id
        const date = new Date()
        await pool.query("insert into images (cloudinary_id, image_url, building_id, dateofpost) values ($1, $2, $3, $4)",
        [result.public_id, result.secure_url, building_id, date])
        return res.send({ info: "image succesfully uploaded" })

    }catch (error) {
        console.log(error)
        res.status(500).send({ error: "invalid request" });
      }

}



