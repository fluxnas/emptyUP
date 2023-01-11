import express from "express"
const router = express.Router()

// Main page
router.get("/", ( req, res ) =>{
    res.send("MAIN PAGE")
})


export default router