const jwt = require("jsonwebtoken");
const UserService = require("../service/UserService");

exports.authMiddleware = async function(req, res, next) {
  const bearerHeader = req.headers.authorization;
  const token = bearerHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`);
    if (decoded) {
      const user = await UserService.getById(decoded.id);
      req.user = user;
      return next();
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send(err);
  }
  console.log("usual case when token not pass");
  res.status(401).send("Bad token");
};
