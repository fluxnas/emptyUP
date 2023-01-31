import bcrypt from "bcrypt"
import {pool} from "../models/Client.mjs"
import JWT from "jsonwebtoken";
import { promisify } from "util";
import cloudinary from "../middleware/cloudinary.mjs";
const sign = promisify(JWT.sign);






// Register

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!email || !password || !username)
    return res.status(400).send({ error: "invalid request" });


  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)",
      [username, email, hashedPassword]
    );
    return res.send({ info: "user succesfully added" });
  } catch (err) {
    console.error(err.message);
   
  }
};

// Login

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).send({ error: "invalid request" });

  const query = await pool.query(
    "SELECT username, id, email, password FROM users WHERE email = $1",
    [email]
  );

  if (query.rowCount === 0) {
    return res.status(404).send({ error: "user do not exists" });
  }

  const result = query.rows[0];
  const match = await bcrypt.compare(password, result.password);

  if (match) {
    try {
      const token = await sign({ email }, process.env.SECRET_JWT, {
        algorithm: "HS512",
        expiresIn: "1h",
      });
      console.log(token);
      // return res.send({ token });  => it works when asking to response send the token, but "cannot generate" when sending to the cookie
      res.cookie("access_token", token, {
        httpOnly: true,
      });
    } catch (err) {
      console.log(err.message);
      return res.status(500).send({ error: "Cannot generate token" });
    }
  } else {
    return res.status(403).send({ error: "wrong password" });
  }
};

// add profil picture
export const uploadProfilePic = async ( req, res ) =>{
  const file = await req.file.image
  try {
    const photo = await cloudinary.uploader.upload( file.tempfilePath)
    console.log(photo.public_id)
    const public_id = photo.public_id
    const user_id =  "1" //req.decoded
    const user = await pool.query(" SELECT id FROM users WHERE id = $1", [ user ])
    const profilePic = await pool.query(
      "INSERT INTO users (profil_picture_url) VALUES =$1",
      [photo.secure_url, user_id]
    )
    return res.send({ info: "Profil picutre successfully uploaded"})
  } catch (err) {
    console.error(err.message)
    res.status(400).send({error: err})
  }
}

// close subscribing 
export const suscribe = async ( req, res ) =>{
  const { id } = req.params.id
  try {
    const closeSubscribe = await pool.query(
      "SELECT * FROM users WHERE id = $1",
      [id]
    )
    if ( closeSubscribe.rows.length === 0 ) {
      return res.status(404)
      .send({ message : "successfully unsubscribed" })
    }
  } catch (err) {
    console.error(err.message)
    res.status(500).send({ error: "Internal server error"})
  }
}


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

