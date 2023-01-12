import express from "express"
const router = express.Router()

// Main page
router.get("/", ( req, res ) =>{
    res.send("MAIN PAGE")
})
// Login
router.get("/login", ( req, res ) =>{
    res.send("LOGIN")
})

export default router