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

//update by id
router.patch("/:artistId", (req,res,next) => {
    const artistId = req.params.artistId;
    const updateOps = {};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    Artist.updateOne({
        _id: artistId
    }, {
        $set: updateOps
    }).exec()
    .then(result => {
        res.status(200).json({
            message: messages.artist_updated,
            request: {
                method: "PATCH",
                url: "http://localhost:3003/api/artists/" + artistId
            }
        })
    }).catch(err => {
        res.status(500).json({
            error: {
                message: err.message
            }
        })
    })
});

//create new artist
router.post("/", (req,res,next) => {
    const artist = new Artist({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name
    });
    artist.save()
    .then(result => {
        res.status(201).json({
            message: messages.artist_created,
            createdArtist: {
                name: result.name,
                _id: result._id,
                painting: result.painting
            },
            request: {
                method: "POST",
                url: "http://localhost:3003/api/artists/" + result._id
            }
        })
    }).catch(err => {
        res.status(500).json({
            error: {
                message: err.message
            }
        })
    })
});


//get
router.get("/", (req,res,next) => {
    Artist.find()
    .select("name _id")
    .populate("painting", "title _id")
    .exec()
    .then(artists => {
        res.status(200).json({
            artists: artists,
            message: messages.artist_found
        })
    }).catch(err => {
        res.status(500).json({
            error: {
                message: err.message
            }
        })
    }
    )
});

module.exports = router;