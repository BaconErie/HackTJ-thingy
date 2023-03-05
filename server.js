const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn")
const app = express();
const path = require("path");
const PORT = 3500;
require('dotenv').config()

//Connect to MongoDB
connectDB();

app.use((req, res, next) => {
    console.log(req.url);
    next();
})

app.use(express.static(path.join(__dirname, "Public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./Public/HTML/index.html"));

    
})

//don't continue unless the database has connected
mongoose.connection.once('open', () => {

    console.log("Connected To MongoDB");

    app.listen(PORT , () => {
        console.log('Server is running! (Time To Throw A Party)');
    })
    
});
