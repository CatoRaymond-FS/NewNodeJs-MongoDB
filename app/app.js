const express = require("express");
const router = require("../router/router");
const app = express();

// middleware
app.use(express.json());

//default service call
app.get("/", (req,res,next)=>{
    res.status(200).json({
        message: "Service is up",
    })
})

app.patch("/", (req,res,next)=>{
    res.status(200).json({
        message: "Patch is working",
    })
})

//cors
//localhost:3000/example
app.use("/example", router);

//add middleware to add error and bad url
app.use((req,res,next)=>{
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next)=>{
    res.status(error.status || 500).json({
        error:{
            message: error.message,
            status: error.status,
        }
    })
})

module.exports = app; 