import { pool } from "../models/dbPool.mjs";
import pg from "pg";

export const getBuildings = async (req, res) => {
  try {
    await pool.query("SELECT * FROM buildings"),
      res.status(200).json(results.rows);
  } catch (error) {
    res.status(400).send({ error: "invalid request" });
  }
};

export const getBuilding = (req, res) => {
  const { adress, zipcode, city, type } = req.body;

  
 pool.query(
      "SELECT * FROM buildings WHERE adress = $1 OR zipcode = $2 OR city = $3 OR type = $4",
      [adress, zipcode, city, type], (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json(results.rows);
      });
 
};

export const addBuilding = (req, res) => {
    const { adress, zipcode, city, type } = req.body; 
    const admin_id = req.decoded
    
    pool.query(
            "insert into buildings (adress, zipcode, city, type, admin_id) values ($1, $2, $3, $4)",
            [adress, zipcode, city, type, admin_id]
        );
        return res.send({info: "building successfully added"});
};

export const updateBuilding = (req, res) => {};

export const deleteBuilding = (req, res) => {};
