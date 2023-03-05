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
  isBreak: {
    type: Boolean,
    default: false
  },
  userID: String
});

module.exports = mongoose.model("User", userSchema);
