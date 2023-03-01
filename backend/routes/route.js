const express = require("express");
const router = express.Router();
require("dotenv").config();
const database = require("../db/schema")


router.get('/dummy',(req,res)=>{
  res.send("hii")
})
router.post("/dummy", async (req, res) => {
    
    await database.create(req.body);
    res.status(200).json("data added succes");

  });

  module.exports = router;

