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
  }
} catch (err) {
  console.error(err.message);
  res.status(500).json({ message: "Internal Server Error" })
}
}

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
export const creatOneBuilding = async ( req, res ) =>{
try {
    const { adress, zipcode, city, type } = req.body
    const dateofpost = "123456"
    const admin_id = "3"
    const photo_url = "tezzzzz"

    const newBuilding = await pool.query (
        "INSERT INTO buildings ( adress, zipcode, city, type, dateofpost, admin_id, photo_url ) VALUES ( $1, $2, $3, $4, $5, $6, $7 ) RETURNING *",
        [ adress, zipcode, city, type, dateofpost, admin_id, photo_url ]
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
      res.json("building  updated successfully")
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

