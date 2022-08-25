//use express
const express = require("express");
const Artist = require("../models/artist");

//use router
const router = express.Router();

//import messages
const messages = require("../../messages/messages");


//get by id
router.get("/:artistId", (req,res,next) => {
    const artistId = req.params.artistId;
    Artist.findById(artistId)
    .select("name _id")
    .populate("painting", "title _id")
    .exec()
    .then(artist => {
        if(!artist){
            console.log(artist);
            return res.status(404).json({
                message: messages.artist_not_found
            })
        }
        res.status(200).json({
            artist: artist
        })
})
    .catch(err => {
        res.status(500).json({error:{
            message: err.message
        }
    })
})
});

//delete by id
router.delete("/:artistId", (req,res,next) => {
    const artistId = req.params.artistId;
    Artist.deleteOne({
        _id: artistId
    })
    .exec()
    .then(result => {
        res.status(200).json({
            message: messages.artist_deleted,
            request: {
                method: "DELETE",
                url: "http://localhost:3003/api/artists/" + artistId

            }
        })
    })
    .catch(err => {
        res.status(500).json({
            error: {
                message: err.message
            }
        })
    })

});
