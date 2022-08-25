//use express
const express = require("express");
const { default: mongoose } = require("mongoose");

//use router
const router = express.Router();

//use Painting model
const Painting = require("../models/painting");


//get
router.get("/", (req, res, next) => {
    Painting.find()
        .then(paintings => {
            res.status(200).json({
                message: "Paintings created successfully!",
                createdPaintings: paintings.map(painting =>{
                    return {
                        title: painting.title,
                        artist: painting.artist,
                        year: painting.year,
                    }
                })
            });
        }).catch(err => {
            res.status(500).json({
                error: err
            });
        }
        );
});
//post
router.post("/", (req, res, next) => {
   const newPainting = new Painting({
         _id: new mongoose.Types.ObjectId(),
            title: req.body.title,
            artist: req.body.artist,
            year: req.body.year
   })

   newPainting.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Painting created successfully!",
                createdPainting: {
                    title: result.title,
                    artist: result.artist,
                    year: result.year,
                    _id: result._id,
                    metadata: {
                        method: req.method,
                        host: req.hostname
                    }
                }
            })
        })
            .catch(err => {
                res.status(500).json({
                    error: {
                        message: err.message
                    }
                })
          });
});

//Get by id
router.get("/:id", (req, res, next) => {
    const paintingId = req.params.id;
    Painting.findById(paintingId)
        .then(painting => {
            res.status(200).json({
                message: "Painting found!",
                painting: painting
            });
        }
        ).catch(err => {
            res.status(500).json({
                error: {
                    message: err.message
                }
            });
        });
});



//patch
router.patch("/:id", (req, res, next) => {
    const paintingId = req.params.id;
    //patch by id
    Painting.updateOne({
        _id: paintingId
    }, {
        $set: {
            title: req.body.title,
            artist: req.body.artist,
            year: req.body.year
        }
    }).then(result => {
        res.status(200).json({
            message: "Painting updated successfully!",
            result: result,
        })
    }).catch(err => {
        res.status(500).json({
            error: {
                message: err.message
            }
        });
    }
    );
});

//delete
router.delete("/:id", (req, res, next) => {
    const paintingId = req.params.id;
    Painting.deleteOne({ _id: paintingId })
        .then(result => {
            res.status(200).json({
                message: "Painting deleted successfully!",
                result: result
            });
        }
        ).catch(err => {
            res.status(500).json({
                error: {
                    message: err.message
                }
            });
        }
        );
});

//export
module.exports = router;
