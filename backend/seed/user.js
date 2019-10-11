const { UserService } = require("../service/UserService");
const User = require("../models/user");

const adminUserData = {
  firstName: "admin",
  lastName: "admin",
  email: "admin@example.com",
  password: "qwerqwer"
};

module.exports.seedUser = async function() {
  await User.deleteOne({ email: adminUserData.email });
  await UserService.createUser(adminUserData, true);
  return true;
};
