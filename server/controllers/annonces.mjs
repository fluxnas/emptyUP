import { pool } from "../models/dbPool.mjs";

export const postAnnonces = async (req, res) => {
  const { content, subject, city } = req.body;
  const date = new Date();
  const user_id = "2";

  if (!content) {
    return res.status(400).send({ error: "no text entered" });
  }

  try {
    const query = await pool.query(
      "insert into annonces (user_id,content, date, subject, city) values ($1, $2, $3, $4, $5) RETURNING *",
      [user_id, content, date, subject, city]
    );
    return res.send({ message: "announce correctly added" });
  } catch (err) {
    if (err.code === "23505") {
      // i added "unique" constraint to "content" in the table like that it will check automaticly if the announcement is already in the database
      return res.status(400).send({ error: "annonce already exist" });
    }
    console.error(err)
    res.send(err);
  }
};

export const getAllAnnonces = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM annonces");

    if (result.rows.length === 0) {
      return res.status(400).json({ message: "No data to be displayed" });
    }
    return res.status(200).json({data : result.rows} );
  } catch (error) {
    res.status(400).send({ error: "invalid request" });
  }
};

export const getOneAnnonce = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).send("no id provided");
  }
  try {
    const query = await pool.query("SELECT * FROM annonces WHERE id = $1", [
      id,
    ]);
    if (query.rows.length === 0) {
      return res.status(404).send("no announcement found");
    }
    return res.status(200).json(query.rows);
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
};

export const deleteAnnonce = async (req, res) => {
  const id = req.params.id;
  const user_id = "2"   /// req.decoded quand middleware
  const verif = await pool.query("SELECT user_id from annonces where id = $1", [
    id,
  ]);
  // if (verif.rows[0].user_id !== user_id) {                    /// l'activer que quand middleware auth ok
  //   res.status(400).send({ info: "not authorized" });
  // }                                            
  try {
    const result = await pool.query("SELECT * FROM annonces WHERE id = $1", [
      id,
    ]);
    if (result.rows.length === 0) {
      return res.status(404).send({ error: "announcement not found" });
    }
    await pool.query("DELETE FROM annonces WHERE id = $1", [id]);
    return res
      .status(200)
      .send({ message: "announcement deleted successfully" });
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
};

export const updateAnnonce = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(404).json({ message: "no announcement" });
  }
  try {
    await pool.query("update annonces set content = $1 where id = $2", [
      content,
      id,
    ]);
    res.statu(200).send("announcement modified");
  } catch (error) {
    res.send(error);
  }
};
