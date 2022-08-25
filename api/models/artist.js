//use mongoose
const mongoose = require("mongoose");

//create schema for artist
const artistSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    painting: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Painting",
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

//export
module.exports = mongoose.model("Artist", artistSchema);
