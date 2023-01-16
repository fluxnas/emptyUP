import { pool } from "../models/dbPool.mjs";
import { v2 as cloudinary } from "cloudinary";
import { request } from "express";
import path from 'path';
import multer from "multer";
import datauri from "datauri";



const storage = multer.memoryStorage();
const maxSize = 5000000;
const upload = multer({ storage, limits: { fileSize: maxSize } });







const dataUri = (req) => {
  dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);
}

export const uploadImage = async (req, res) => {
  console.log(req.file);


  // const file = await dataUri(req).content;
  // console.log(file);

  // cloudinary.uploader.upload(file).then((fileUpload) => {
  // console.log(fileUpload);
  // pool
  //   .query(
  //     "insert into images (cloudinary_id, image_url, building_id ) values ($1, $2, $3) RETURNING * ",
  //     [file.public.id, file.secure_url, building_id]
  //   )
  //   .then((result) => {
  //     result = result.rows[0];
  //     res.status(201).send({
  //       status: "success",
  //       data: {
  //         message: "Image Uploaded Successfully",
  //         cloudinary_id: result.cloudinary_id,
  //         image_url: result.image_url,
  //       },
  //     });
  //   })
  //   .catch((e) => {
  //     res.status(500).send({
  //       message: "failure",
  //       e,
  //     });
  //   });
  // });
};

// export const uploadImage = async (req, res) => {
//   // const image_u = await upload.single("file")
//   upload.single("file", req, res, (err) => {
//     const file = req.file;
//     console.log(req.file);
//     // console.log(image);
//     // return image;

//     const building_id = "3";
//     cloudinary.uploader
//       .upload(image)
//       .then((file) => {
//         console.log(file);
//         // pool
//         //   .query(
//         //     "insert into images (cloudinary_id, image_url, building_id ) values ($1, $2, $3) RETURNING * ",
//         //     [file.public.id, file.secure_url, building_id]
//         //   )
//         //   .then((result) => {
//         //     result = result.rows[0];
//         //     res.status(201).send({
//         //       status: "success",
//         //       data: {
//         //         message: "Image Uploaded Successfully",
//         //         cloudinary_id: result.cloudinary_id,
//         //         image_url: result.image_url,
//         //       },
//         //     });
//         //   })
//         //   .catch((e) => {
//         //     res.status(500).send({
//         //       message: "failure",
//         //       e,
//         //     });
//         //   });
//       })
//       .catch((error) => {
//         console.log(error);
//         res.status(500).send({
//           message: "Upload failed",
//           error: error,
//         });
//       });
//   });
// };
// find alternative to cloudinary ?
