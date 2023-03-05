const express = require("express");
const Router = express.Router();

const handleBlockWebsite = require("../../controllers/handleBlockWebsite");
const handleGetUserInfo = require("../../controllers/handleGetUserInfo");

Router.use("/Extension").post(handleBlockWebsite);

Router.use("/DB").get();

module.exports = Router;
