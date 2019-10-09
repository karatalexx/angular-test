const UserService = require('../service/UserService');

class UserController {
  static async authenticate(req, res) {
    const user = await UserService.authUser(req.body);

    user
      ? res.send(user)
      : res.status(400).json({ message: "Username or password is incorrect" });
  }

  static async createUser(req, res, next) {
    try {
      const newUser = await UserService.createUser(req.body);
      if(!newUser){
        // todo add error
      }
      const newUserAuth = await UserService.authUser(req.body);
      res.send(newUserAuth);
    } catch (err) {
      next(err);
    }
  }

  // async getUserById(req, res, next) {
  //   userService
  //     .getById(req.params.id)
  //     .then(user => (user ? res.json(user) : res.sendStatus(404)))
  //     .catch(err => next(err));
  // }
}

module.exports = UserController;
