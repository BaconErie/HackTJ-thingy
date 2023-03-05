const UserModel = require("../model/User");

const handleUpdatePriorites = async (req, res) => {
  const { userID, priorities } = req.body;

  await UserModel.updateOne({ userID: userID }, { priorities: priorities });

  res.sendStatus(200);
};

module.exports = handleUpdatePriorites;
