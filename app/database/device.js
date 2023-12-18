 const mongoose = require("mongoose");
 const DeviceSchema = new mongoose.Schema({
    crop: String,
    mode: Number,
    pump:Number,
    light:Number,
    illuminated_time:Number,
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model("devices",DeviceSchema);