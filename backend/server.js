require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const PORT = 4000;

const cookieparser = require("cookie-parser");

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectDB = require("./config/connectDB");
const { credentials } = require("./config/credentials");
const { corsOptions } = require("./config/corsHandling");

const { logger } = require("./middleware/logHandler");
const { errorHandler } = require("./middleware/errorHandler");

connectDB();
app.use(credentials);
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use(cookieparser());
app.use(express.json());

app.use(logger);

app.use("/API", require("./Routes/API/APIBranch"));

app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
