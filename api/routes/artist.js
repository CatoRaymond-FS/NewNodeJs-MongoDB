//use express
const express = require("express");

//use router
const router = express.Router();

//get
router.get("/", (req, res, next) => {
    res.json({
        message: "Artist - GET"
    })
});

//post
router.post("/", (req, res, next) => {
    res.json({
        message: "Artist - POST"
    })
});

//Get by id
router.get("/:id", (req, res, next) => {
    const artistId = req.params.id;
    res.json({
        message: "Artist - GET by id",
        id: artistId
    })
});

//patch
router.patch("/:id", (req, res, next) => {
    const artistId = req.params.id;
    res.json({
        message: "Artist - PATCH",
        id: artistId
    })
});

//delete
router.delete("/:id", (req, res, next) => {
    const artistId = req.params.id;
    res.json({
        message: "Artist - DELETE",
        id: artistId
    })
});


//export
module.exports = router;