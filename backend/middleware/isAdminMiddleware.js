exports.isAdminMiddleware = async function(req, res, next) {
  if (!req.user) {
    return res.status(401).end("not auth");
  }
  if (!req.user.isAdmin) {
    return res.status(401).end("not auth (there no admin rights)");
  }
  return next();
};
