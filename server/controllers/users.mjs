import e from "express";
import {pool} from "../models/dbPool.mjs"

export const getUsers = (req, res) => {
    pool.query("SELECT * FROM users", (error, results) => {
      if (error) {
        return res.status(400).send({ error: "invalid request" });
      }
      res.status(200).json(results.rows);
    });
  };




