import { pool } from "../models/Client.mjs"

// Users

// get all users
export const getUsers = async ( req, res ) =>{
    try {
        const allUsers = await pool.query(
            "SELECT * FROM users"
            )
            res.json(allUsers.rows)
    } catch (err) {
        console.error(err.message)
    }
}

// get one user
export const oneUser = async ( req, res ) =>{
    const { id } = req.params
    try {
        const user = await pool.query(
            "SELECT * FROM users WHERE id = $1", 
            [id]
        )
        res.json(user.rows[0])
    } catch (err) {
        console.error(err.message)
    }
}

// create user
export const createUser = async ( req, res ) =>{
    try {
        const { username, email, password } = req.body
        const newUser = await pool.query (
            "INSERT INTO users ( username, email, password ) VALUES ( $1, $2, $3 ) RETURNING *",
            [ username, email, password ]
        )
        res.json(newUser.rows[0])
    } catch ( err ) {
        console.error( err.message )
    }
}

// delete a user
export const deleteUser = async ( req, res ) =>{
    try {
        const { id } = req.params
        const deleteUser =  await pool.query(
            "DELETE FROM users WHERE id = $1",
            [id]
        )
        res.json("User has been deleted!")
    } catch (err) {
        console.error(err.message)
    }
}

// // get one user by sorting id into filterd 
// router.get('/test/:id/:field', async (req, res) => {
//     const fields = ['username', 'email', 'password']
//     if (!fields.includes(req.params.field)) {
//       return res.status(400).json({message: "Invalid field"})
//     }
//     try {
//     // utilise la concatenation pour y ajouter le field
//       const test = await pool.query("SELECT " + req.params.field + " FROM users WHERE id = $1", [req.params.id])
//     // si la ligne est null message d'erreur 
//       if (test.rows.length === 0) {
//         res.status(404).json({ message: "No user" });
//       } else {
//     // sinon renvoi les params du field 
//         res.json({ [req.params.field]: test.rows[0][req.params.field] })
//       }
//     } catch (err) {
//       console.error(err.message)
//       res.status(500).json({ message: "Internal Server Error" })
//     }
//   })

