const mongoose = require("mongoose");
const realTimeSchema = new mongoose.Schema({
   crop: String,
   temperature: Number,
   humidity:Number,
   soil:Number,
   light:Number,
   createAt: { type: Date, default: Date.now },
   updateAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model("realtimes",realTimeSchema);