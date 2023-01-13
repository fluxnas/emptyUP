import { pool } from "../models/dbPool.mjs";
import cloudinary from "cloudinary";
import { request } from "express";
import multer from "multer";

const storage = multer.memoryStorage();
const maxSize = 5000000;
const upload = multer({ storage, limits: { fileSize: maxSize } });

export const uploadImage = (req, res) => {
  
  upload.single("image")(req, res, (err) => {
    
      // Use `req.file` to access the file that was uploaded
      const data = {
        image: req.file.buffer,
      };
      console.log(req.file.buffer)
      
      const building_id = "3";
      cloudinary.v2.uploader
        .upload(req.file.originalname, {resource_type: "auto" })
        .then((image) => {
          pool
            .query(
              "insert into images (cloudinary_id, image_url, building_id ) values ($1, $2, $3) RETURNING * ",
              [image.public.id, image.secure_url, building_id]
            )
            .then((result) => {
              result = result.rows[0];
              res.status(201).send({
                status: "success",
                data: {
                  message: "Image Uploaded Successfully",
                  cloudinary_id: result.cloudinary_id,
                  image_url: result.image_url,
                },
              });
            })
            .catch((e) => {
              res.status(500).send({
                message: "failure",
                e,
              });
            });
        })
        .catch((error) => {
          console.log(error);
          res.status(500).send({
            message: "Upload failed",
            error: error,
          });
        });
    })
  
}
