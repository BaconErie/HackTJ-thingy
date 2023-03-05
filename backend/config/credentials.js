const { allowedOrigins } = require("./allowedOrigins");

const credentials = (req, res, next) => {
  if (allowedOrigins.includes(req.headers.origins)) {
    res.header("Access-Control-Allow-Credentials", true);
  }
  next();
};

module.exports = { credentials };
