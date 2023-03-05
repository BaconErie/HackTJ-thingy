const express = require("express");
const Router = express.Router();
const path = require("path");

Router.route("/").get((req, res) => {
  //if there is no cookie, i must send them a cookie here
  res.sendFile(path.join(__dirname, "..", "..", "frontend", "index.html"));
});

module.exports = Router;
