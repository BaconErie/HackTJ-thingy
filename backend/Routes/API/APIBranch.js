const express = require("express");
const Router = express.Router();

const handleBlockWebsite = require("../../controllers/handleBlockWebsite");
const handleGetUserInfo = require("../../controllers/handleGetUserInfo");
const handleAddUser = require("../../controllers/handleUpdateBreak");

const handleUpdateBreak = require("../../controllers/handleUpdateBreak");
const handleUpdateLocation = require("../../controllers/handleUpdateLocation");
const handleUpdatePriorites = require("../../controllers/handleUpdateLocation");

Router.post("/Extension", handleBlockWebsite);

Router.post("/DB/ADD", handleAddUser);

Router.post("/DB/UPDATE-break", handleUpdateBreak);
Router.post("/DB/UPDATE-Location", handleUpdateLocation);
Router.post("/DB/UPDATE-Priorities", handleUpdatePriorites);

module.exports = Router;
