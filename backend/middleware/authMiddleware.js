const jwt = require("jsonwebtoken");
const { UserService } = require("../service/UserService");

exports.authMiddleware = async function(req, res, next) {
  try {
    // get token from header
    const bearerHeader = req.headers.authorization;
    if (!bearerHeader) {
      return res.status(401).end("Token is not set");
    }
    const bearerHeaderParts = bearerHeader.split("Bearer ");
    if (bearerHeaderParts.length < 2) {
      return res.status(401).end("Bad token");
    }
    const token = bearerHeaderParts[1];

    // validate token through JWT
    const decoded = jwt.verify(
      token,
      `${process.env.JWT_SECRET}`,
      (err, decoded) => {
        if (err) {
          return res.status(401).end(err.message);
        }
        return decoded;
      }
    );

    // check is user exists
    if (!decoded || !decoded.id) {
      return res.status(401).end("Bad token");
    }

    let user = null;
    try {
      user = await UserService.getById(decoded.id);
    } catch (err) {
      return res.status(401).end("user is not exists");
    }
    if (!user) {
      return res.status(401).end("user is not exists");
    }

    // OK - go next
    req.user = user;
    return next();
  } catch (err) {
    console.error(err);
    return res.status(500).end(err);
  }
};
