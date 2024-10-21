import express from "express";
import "dotenv/config"
import {db} from "./configs/db.js";

const app = express()
const PORT = 5000;

app.use("/", (req,res) => {
    res.status(200).json({
        message: "Hello World",
    });
});


//route
app.use("*", (req,res) => {
    res.status(404).json({
        message: "not found",
    });
});

//start the server
app.listen(PORT, () => {
    console.log('server started, listening on port ${PORT');
});