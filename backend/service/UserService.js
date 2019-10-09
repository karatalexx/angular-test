const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const saltRounds = 10;

class UserService {
  static async getById(id) {
    const {
      hashed_password,
      ...userWithoutSensitiveData
    } = await User.findById(id);
    return userWithoutSensitiveData;
  }

  static async authUser({ email, password }) {
    const user = await User.findOne({ email: email }).lean();

    if (user && bcrypt.compareSync(password, user.hashed_password)) {
      const { _id, hashed_password, ...userWithoutSensitiveData } = user;
      const token = jwt.sign({ id: _id }, `${process.env.JWT_SECRET}`);
      return {
        ...userWithoutSensitiveData,
        access_token: token
      };
    }
    return null;
  }

  static async createUser(fields, isAdmin = false) {
    const { password, email, ...otherFields } = fields;
    // validate
    if (await User.findOne({ email })) {
      throw 'Email "' + userName + '" is already taken';
    }
    return new User({
      email,
      ...otherFields,
      isAdmin: isAdmin,
      hashed_password: bcrypt.hashSync(password, saltRounds)
    }).save();
  }
}

module.exports = UserService;
