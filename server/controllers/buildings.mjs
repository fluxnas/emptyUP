<<<<<<< HEAD
import { pool } from "../models/Client.mjs"
// Buildings

// get all buildings
export const getBuildings = async ( req, res ) =>{
    try {
        const allbuildings = await pool.query(
            "SELECT * FROM buildings"
            )
            res.json(allbuildings.rows)
    } catch (err) {
        console.error(err.message)
    }
}


//get one building by ID
export const oneBuilding = async ( req, res ) =>{
const { id } = req.params
try {
    const building  = await pool.query(
        "SELECT * FROM buildings WHERE id = $1", 
        [id]
    )
    res.json(building.rows[0])
} catch (err) {
    console.error(err.message)
}
}

//get one building by zipcode
export const getZipcode = async (req, res) => {
try {
  const building = await pool.query("SELECT * FROM buildings WHERE zipcode = $1", [req.params.zipcode])
  if (building.rows.length === 0) {
    res.status(404).json({ message: "No building found with this zipcode" })
  } else {
    res.json(building.rows);
=======
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
>>>>>>> main
  }
} catch (err) {
  console.error(err.message);
  res.status(500).json({ message: "Internal Server Error" })
}
}

<<<<<<< HEAD
// get one building by city
export const getCity = async (req, res) => {
try {
  const building = await pool.query("SELECT * FROM buildings WHERE city = $1", [req.params.city]);
  if (building.rows.length === 0) {
    res.status(404).json({ message: "No building found with this city" });
  } else {
    res.json(building.rows)
  }
} catch (err) {
  console.error(err.message)
  res.status(500).json({ message: "Internal Server Error" });
}
}

//get one building by adress need to find a way to retrieve full adresses
export const getAdress = async (req, res) => {
try {
  const building = await pool.query("SELECT * FROM buildings WHERE adress = $1", [req.params.adress]);
  if (building.rows.length === 0) {
    res.status(404).json({ message: "No building found with this adress" });
  } else {
    res.json(building.rows)
  }
} catch (err) {
  console.error(err.message)
  res.status(500).json({ message: "Internal Server Error" });
}
}

//create a building
export const createOneBuilding = async ( req, res ) =>{
try {
    const { adress, zipcode, city, type } = req.body
    // const dateofpost = Date.now() needs to be set
    const dateofpost = new Date
    const admin_id = "3"
    const initial_image = "heehheheheheheh"
    
    
    if ( !adress || !zipcode || !city || !type ) {
      return res.status(400).json({ error: "Missing parameters" })
    }
    const newBuilding = await pool.query (
        "INSERT INTO buildings ( adress, zipcode, city, type, dateofpost, admin_id, initial_image) VALUES ( $1, $2, $3, $4, $5, $6, $7) RETURNING *",
        [ adress, zipcode, city, type, dateofpost, admin_id, initial_image ]
    )
    res.json(newBuilding.rows[0])
} catch ( err ) {
    console.error( err.message )
}
}

// update a building 
export const updateBuilding = async (req, res) => {
  try {
      const { id } = req.params
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

//delete a building
export const deleteBuilding =  async ( req, res ) =>{
try {
    const { id } = req.params
    const deleteBuilding =  await pool.query(
        "DELETE FROM buildings WHERE id = $1",
        [id]
    )
    res.json("building has been deleted!")
} catch (err) {
    console.error(err.message)
}
}

=======
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
  const { adress, zipcode, city, type, position} = req.body;
  // const adress = "rue loulou"
  // const zipcode = "1234"
  // const city = "bxl"
  // const type = "house"  // => infos lambda pour tester de post photo avec Insomnia/Postman
  const file  = req.files.image
  console.log(file)
  const dateofpost = new Date()
  const admin_id = "1"
  if (!adress || !zipcode || !city || !type) {
    return res.status(400).json({ error: "Missing parameters" });
  }
  try {
    const result = await cloudinary.uploader.upload(file.tempFilePath)
    const initialImage = result.secure_url;
    console.log(initialImage)
    await pool.query(
      "insert into buildings (adress, zipcode, city, type, dateofpost, admin_id, initial_image, position) values ($1, $2, $3, $4, $5, $6, $7, $8)",
      [adress, zipcode, city, type, dateofpost, admin_id, initialImage, position]
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
  const admin_id = "2" // => change to "req.decoded"
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
>>>>>>> main
