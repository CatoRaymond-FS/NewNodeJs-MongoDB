//use mongoose
const mongoose = require("mongoose");

//create schema for artist
const artistSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    painting: String,
});

//export
module.exports = mongoose.model("Artist", artistSchema);
