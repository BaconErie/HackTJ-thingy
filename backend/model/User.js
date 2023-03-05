const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  priorities: {
    type: [
      {
        name: String,
        ExpectedTime: Number
      }
    ],
    default: []
  },
  locations: {
    url: {
      type: [String],
      default: []
    },
    categories: {
      type: [String],
      default: []
    }
  },
  isBreak: Boolean,
  userID: String
});

module.exports = mongoose.model("User", userSchema);
