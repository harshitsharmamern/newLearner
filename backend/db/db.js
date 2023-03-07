const mongoose = require("mongoose");
require("dotenv").config();
const link = "mongodb://localhost:27017/data_base"
//const li = process.env.DATABASE
const connectToMongo = () => {
  mongoose
    .connect(link)
    .then(() => {
      console.log("Connected to Database");
    })
    .catch((err) => {
      console.log("Some error occured in database connection", err);
    });
};

module.exports = connectToMongo;
