const UserModel = require("../model/User");

const handleUpdateLocation = async (req, res) => {
  const { userID, locations } = req.body;

  await UserModel.updateOne({ userID: userID }, { locations: locations });

  res.sendStatus(200);
};

module.exports = handleUpdateLocation;
