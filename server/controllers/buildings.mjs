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
  const { adress, zipcode, city, type } = req.body;
  const admin_id = "2"
  if (!adress || !zipcode || !city || !type) {
    return res.status(400).json({ error: "Missing parameters" });
  }
  try {
    await pool.query(
      "insert into buildings (adress, zipcode, city, type, admin_id) values ($1, $2, $3, $4, $5)",
      [adress, zipcode, city, type, admin_id]
    );
    return res.status(201).send({ info: "building successfully added" });
  } catch (error) {
    res.status(400).send({ error: "invalid request" });
  }
};

export const updateBuilding = (req, res) => {};

export const deleteBuilding = (req, res) => {};
