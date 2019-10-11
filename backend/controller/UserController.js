const { UserService, CreateUserError } = require("../service/UserService");

class UserController {
  static async authenticate(req, res) {
    const user = await UserService.authUser(req.body);

    user
      ? res.send(user)
      : res.status(400).json({ message: "Username or password is incorrect" });
  }

  static async createUser(req, res, next) {
    try {
      let newUser;
      try {
        newUser = await UserService.createUser(req.body);
      } catch (error) {
        if (error instanceof CreateUserError) {
          return res
            .status(400)
            .send({ message: error.message })
            .end();
        } else throw error;
      }
      if (!newUser) {
        return res
          .status(400)
          .send({ message: "Can't create user. Internal server error." })
          .end();
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
