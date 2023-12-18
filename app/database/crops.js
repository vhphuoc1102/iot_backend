const mongoose = require("mongoose");
const CropsSchema= new mongoose.Schema({
  id:String,
  name: String,
  price: String,
  detail: String,
});
module.exports = mongoose.model("crops", CropsSchema);