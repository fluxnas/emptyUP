import { pool } from "../models/dbPool.mjs";
import ImageKit from "imagekit";
import multer from "multer";
import dotenv from "dotenv";

dotenv.config();

const imagekit = new ImageKit({
  publicKey: "public_agbv4LTEvHe+L4/m+MiREuIJ7KQ=",
  privateKey: "private_vxTjxBS7lI96dMxfQ+svc0pW7C0=",
  urlEndpoint: "https://ik.imagekit.io/8kglcg7je"
});

const storage = multer.memoryStorage();
const maxSize = 5000000;
const upload = multer({ storage, limits: { fileSize: maxSize } });

export const uploadImage = async (req, res) => {
    try {
      const file = req.file
      console.log(req.file.buffer)
      const building_id = "3";
  
      const image = await imagekit.upload({
          file : file.buffer,
          fileName : file.originalname,
      });

     
      
      const result = await pool.query(
        "insert into images (imagekit_id, image_url, building_id ) values ($1, $2, $3) RETURNING * ",
        [image.response.fileId, image.response.url, building_id]
      );
      console.log(res)
      result = result.rows[0];
      res.status(201).send({
        status: "success",
        data: {
          message: "Image Uploaded Successfully",
          imagekit_id: result.imagekit_id,
          image_url: result.image_url,
        },
      });
    } catch (err) {
      console.log(err);
      res.status(500).send({
        message: "Upload failed",
        error: err,
      });
    }
  };
