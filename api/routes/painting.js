//use express
const express = require("express");

//use router
const router = express.Router();

//get
router.get("/", (req, res, next) => {
    res.json({
        message: "Painting - GET"
    })
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
