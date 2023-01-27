import { pool } from "../models/dbPool.mjs";
import pg from "pg";
import { v2 as cloudinary } from "cloudinary";


export const getUserAdminBuildings = async (req, res) => {
  const user_id = req.params.id
  try{
    const result = await pool.query("SELECT * FROM buildings where admin_id = $1 ",
    [user_id]);
    
    return res.status(200).json({data : result.rows})
  } catch (error){
    res.status(400).send({ error: "invalid request" });
  }
}

export const getBuildings = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM buildings")

    if (result.rows.length === 0) {
      return res.status(400).json({ message: "No data to be displayed" });
    }
    return res.status(200).json({ data: result.rows });
  } catch (error) {
    res.status(400).send({ error: "invalid request" });
  }
};

export const getBuilding = async (req, res) => {
  const { adress, zipcode, city, type } = req.body;

  try {
    const result = await pool.query(
      "SELECT * FROM buildings WHERE adress = $1 OR zipcode = $2 OR city = $3 OR type = $4",
      [adress, zipcode, city, type]
    );
    res.status(200).json(result.rows);
  } catch (error) {
    if (error.code === "42P01") {
      return res.status(404).json({ error: "Table not found" });
    }
    res.status(400).json({ error: "Bad request" });
  }
};

export const addBuilding = async (req, res) => {
  const { adress, zipcode, city, type} = req.body;
  // const adress = "rue tonton"
  // const zipcode = "1234"
  // const city = "bxl"
  // const type = "house"
  const file  = req.files.image
  console.log(file)
  const dateofpost = new Date()
  const admin_id = "2"
  if (!adress || !zipcode || !city || !type) {
    return res.status(400).json({ error: "Missing parameters" });
  }
  try {
    const result = await cloudinary.uploader.upload(file.tempFilePath)
    const initialImage = result.secure_url;
    console.log(initialImage)
    await pool.query(
      "insert into buildings (adress, zipcode, city, type, dateofpost, admin_id, initial_image) values ($1, $2, $3, $4, $5, $6, $7)",
      [adress, zipcode, city, type, dateofpost, admin_id, initialImage]
    );
    return res.status(201).send({ info: "building successfully added" });
  } catch (error) {
    console.log(error)
    res.status(400).send({ error: "invalid request" });
  }
};


export const updateBuilding = async (req, res) => {
  try {
    const  id  = req.params
    const { adress, zipcode, city, type } = req.body;
    const update = await pool.query(
        "UPDATE buildings SET adress = $1, zipcode = $2, city = $3, type = $4 WHERE id = $5", 
        [adress, zipcode, city, type, id ]
    )
    res.json("building updated successfully")
} catch (err) {
    console.error(err.message)
    res.status(500).json("Error updating building ")
}
}
 


export const deleteBuilding = async (req, res) => {
  const id = req.params.id;
  const admin_id = "2"
  // const verif = await pool.query("SELECT admin_id from buildings where id = $1", [
  //   id,
  // ]);
  // if (verif.rows[0].user_id !== admin_id) {
  //   return res.status(400).send({ info: "not authorized" });
  // }
  try {
    await pool.query("DELETE FROM buildings WHERE id = $1", [id]);
    return res
      .status(200)
      .send({ message: "building deleted successfully" });
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
};
