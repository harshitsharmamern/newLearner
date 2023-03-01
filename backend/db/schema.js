const mongoose = require("mongoose");

const database1 = mongoose.Schema({
  fName: {
    type: String,
  },
  mName: {
    type: String,
  }
  
});
const Admin = mongoose.model("admin", database1);

module.exports = Admin;
