//use express
const express = require("express");
const { default: mongoose } = require("mongoose");

//use router
const router = express.Router();

//get
router.get("/", (req, res, next) => {
    const newPainting = new Painting({
        title: req.body.title,
        artist: req.body.artist,
        year: req.body.year,
        _id: mongoose.Types.ObjectId()
    });

    newPainting.save()
        .then((result => {
            res.status(201).json({
                message: "Painting created successfully",
                createdPainting: {
                    title: result.title,
                    artist: result.artist,
                    year: result.year,
                    _id: result._id,
                    metadata: {
                        method: req.medhod,
                        host: req.hostname
                    }
                }
            })
        }
        ))
        .catch(err => {
            res.status(500).json({
                error: {
                    message: err.message
                }
            })
        }
    )
});

//post
router.post("/", (req, res, next) => {
    res.json({
        message: "Painting - POST"
    })
});

//Get by id
router.get("/:id", (req, res, next) => {
    const paintingId = req.params.id;
    res.json({
        message: "Painting - GET by id",
        id: paintingId
    })
});

//patch
router.patch("/:id", (req, res, next) => {
    const paintingId = req.params.id;
    res.json({
        message: "Painting - PATCH",
        id: paintingId
    })
});

//delete
router.delete("/:id", (req, res, next) => {
    const paintingId = req.params.id;
    res.json({
        message: "Painting - DELETE",
        id: paintingId
    })
});

//export
module.exports = router;
