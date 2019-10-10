const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  email: { type: String, unique: true, required: true },
  hashed_password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  isAdmin: Boolean
});

mongoose.model("user", UsersSchema);
module.exports = mongoose.model("user");
