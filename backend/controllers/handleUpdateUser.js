const UserModel = require("../model/User");

const handleUpdateUser = async (req, res) => {
  const { userID } = req.cookie;

  if (!userID) {
    await UserModel.create({ userID: userID });
  }
};

module.exports = handleUpdateUser;
