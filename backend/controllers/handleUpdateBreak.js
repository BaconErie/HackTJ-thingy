const UserModel = require("../model/User");

const handleUpdateUser = async (req, res) => {
  const { userID, isBreak } = req.body;

  await UserModel.updateOne({ userID: userID }, { isBreak: isBreak });

  res.sendStatus(200);
};

module.exports = handleUpdateUser;
