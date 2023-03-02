const express = require("express");
const router = express.Router();
require("dotenv").config();
const database = require("../db/schema")


router.get('/dummy',async(req,res)=>{
 
  const data = await database.find();

  res.json(
    data
  )
})
router.post("/dummy", async (req, res) => {
    
    const data = await database.create(req.body);
    
    res.status(200).json("data added succes");

  });

  module.exports = router;

