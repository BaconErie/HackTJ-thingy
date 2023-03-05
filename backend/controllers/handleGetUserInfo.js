const UserModel = require("../model/User");

const handleGetUserInfo = async (req, res) => {
  const { userID } = req.body;

  const userInfo = await UserModel.findOne({ userID: userID });

  res.json(userInfo);
};

module.exports = handleGetUserInfo;
