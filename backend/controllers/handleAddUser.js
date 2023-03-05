const UserModel = require("../model/User");

const handleAddUser = async (req, res) => {
  const newUserID = require("crypto").randomBytes(64).toString("hex");

  await UserModel.create({ userID: newUserID });

  res.cookie("userID", newUserID);

  res.json({ userID: newUserID });
};

module.exports = handleAddUser;