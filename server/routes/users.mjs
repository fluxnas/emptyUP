import express from "express"
import client from "../controller/Client.mjs"
const router = express.Router()


// Users
// get all users
router.get('/', async ( req, res ) =>{
    try {
        const allUsers = await client.query(
            "SELECT * FROM users"
            )
            res.json(allUsers.rows)
    } catch (err) {
        console.error(err.message)
    }
})
// get one user
router.get('/user/:id', async ( req, res ) =>{
    const { id } = req.params
    try {
        const user = await client.query(
            "SELECT * FROM users WHERE id = $1", 
            [id]
        )
        res.json(user.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})
// get one user by sorting id into filterd 
router.get('/test/:id/:field', async (req, res) => {
    const fields = ['username', 'email', 'password'];
    if (!fields.includes(req.params.field)) {
      return res.status(400).json({message: "Invalid field"});
    }
    try {
    // utilise la concatenation pour y ajouter le field
      const test = await client.query("SELECT " + req.params.field + " FROM users WHERE id = $1", [req.params.id]);
    // si la ligne est null message d'erreur 
      if (test.rows.length === 0) {
        res.status(404).json({ message: "No user" });
      } else {
    // sinon renvoi les params du field 
        res.json({ [req.params.field]: test.rows[0][req.params.field] });
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
// create user
router.post('/user', async ( req, res ) =>{
    try {
        const { username, email, password } = req.body
        const newBuilding = await client.query (
            "INSERT INTO users ( username, email, password ) VALUES ( $1, $2, $3 ) RETURNING *",
            [ username, email, password ]
        )
        res.json(newBuilding.rows[0])
    } catch ( err ) {
        console.error( err.message )
    }
})


// update a user
router.put('/user/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { username, email, password } = req.body;
        const updateUser = await client.query(
            "UPDATE users SET username = $1, email = $2, password = $3 WHERE id = $4", 
            [username, email, password, id]
        )
        res.json("User updated successfully")
    } catch (err) {
        console.error(err.message)
        res.status(500).json("Error updating user")
    }
})

// delete a user
router.delete('/user/:id', async ( req, res ) =>{
    try {
        const { id } = req.params
        const deleteUser =  await client.query(
            "DELETE FROM users WHERE id = $1",
            [id]
        )
        res.json("User has been deleted!")
    } catch (err) {
        console.error(err.message)
    }
})

////////////////////////////////////////////////////

// Buildings

// get all buildings
router.get('/buildings', async ( req, res ) =>{
        try {
            const allUsers = await client.query(
                "SELECT * FROM buildings"
                )
                res.json(allUsers.rows)
        } catch (err) {
            console.error(err.message)
        }
})


//get one building by ID
router.get('/building/:id', async ( req, res ) =>{
    const { id } = req.params
    try {
        const userBuilding = await client.query(
            "SELECT * FROM buildings WHERE id = $1", 
            [id]
        )
        res.json(userBuilding.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})


//get one building by zipcode
router.get('/zipcode/:zipcode', async (req, res) => {
    try {
      const building = await client.query("SELECT * FROM buildings WHERE zipcode = $1", [req.params.zipcode])
      if (building.rows.length === 0) {
        res.status(404).json({ message: "No building found with this zipcode" })
      } else {
        res.json(building.rows);
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: "Internal Server Error" })
    }
  })


// get one building by city
router.get('/city/:city', async (req, res) => {
    try {
      const building = await client.query("SELECT * FROM buildings WHERE city = $1", [req.params.city]);
      if (building.rows.length === 0) {
        res.status(404).json({ message: "No building found with this city" });
      } else {
        res.json(building.rows)
      }
    } catch (err) {
      console.error(err.message)
      res.status(500).json({ message: "Internal Server Error" });
    }
  })


//get one building by adress need to find a way to retrieve full adresses
router.get('/adress/:adress', async (req, res) => {
    try {
      const building = await client.query("SELECT * FROM buildings WHERE adress = $1", [req.params.adress]);
      if (building.rows.length === 0) {
        res.status(404).json({ message: "No building found with this adress" });
      } else {
        res.json(building.rows)
      }
    } catch (err) {
      console.error(err.message)
      res.status(500).json({ message: "Internal Server Error" });
    }
  })


//create a building
router.post ('/building', async ( req, res ) =>{
    try {
        const { adress, zipcode, city, type } = req.body
        const dateofpost = "123456"
        const admin_id = "3"
        const photo_url = "tezzzzz"

        const newBuilding = await client.query (
            "INSERT INTO buildings ( adress, zipcode, city, type, dateofpost, admin_id, photo_url ) VALUES ( $1, $2, $3, $4, $5, $6, $7 ) RETURNING *",
            [ adress, zipcode, city, type, dateofpost, admin_id, photo_url ]
        )
        res.json(newBuilding.rows[0])
    } catch ( err ) {
        console.error( err.message )
    }
})


//delete a building
router.delete('/building/:id', async ( req, res ) =>{
    try {
        const { id } = req.params
        const deleteBuilding =  await client.query(
            "DELETE FROM buildings WHERE id = $1",
            [id]
        )
        res.json("building has been deleted!")
    } catch (err) {
        console.error(err.message)
    }
})
export default router