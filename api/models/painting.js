//use mongoose
const mongoose = require("mongoose");

//create schema for painting
const paintingSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    artist: String,
    year: Number
});

//export
module.exports = mongoose.model("Painting", paintingSchema);
