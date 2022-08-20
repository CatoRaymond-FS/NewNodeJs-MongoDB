//use express
const express = require("express");

//use router
const router = express.Router();

//get
router.get("/", (req, res, next) => {
    res.json({
        message: "Painting - GET"
    })
    const updatedPainting = {
        title: req.body.title,
        artist: req.body.artist,
        year: req.body.year,
    }

    Painting.updateOne({
        _id: paintingis
    },{
        $set: updatedPainting
    }).then(result => {
        res.status(200).json({
            message: "Painting updated",
            painting: {
                title: result.title,
                artist: result.artist,
                year: result.year,
                id: result._id
            },
            metadata: {
                host: req.hostname,
                method: req.method
            }
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
