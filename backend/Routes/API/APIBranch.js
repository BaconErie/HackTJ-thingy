const express = require("express");
const Router = express.Router();

const handleBlockWebsite = require("../../controllers/handleBlockWebsite");
const handleGetUserInfo = require("../../controllers/handleGetUserInfo");
const handleAddUser = require("../../controllers/handleAddUser");

const handleUpdateBreak = require("../../controllers/handleUpdateBreak");
const handleUpdateLocation = require("../../controllers/handleUpdateLocation");
const handleUpdatePriorites = require("../../controllers/handleUpdateLocation");

Router.route("/DB/ADD").post(handleAddUser);
Router.route("/DB/POST/UserInfo").post(handleGetUserInfo);
Router.route("/Extension").post(handleBlockWebsite);

Router.route("/DB/UPDATE/break").patch(handleUpdateBreak);
Router.route("/DB/UPDATE/Location").patch(handleUpdateLocation);
Router.route("/DB/UPDATE/Priorities").patch(handleUpdatePriorites);

module.exports = Router;
