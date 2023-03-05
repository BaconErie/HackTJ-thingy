
const express = require("express");
const app = express();
const path = require("path");
const PORT = 3500;

app.use((req, res, next) => {
    console.log(req.url);
    next();
})

app.use(express.static(path.join(__dirname, "Public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.listen(PORT , () => {
    console.log('Server is running');
})

