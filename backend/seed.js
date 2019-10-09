require("./dbConnect");
const UserService = require("./service/UserService");

UserService.createUser(
  {
    firstName: "admin",
    lastName: "admin",
    email: "admin@example.com",
    password: "qwerqwer"
  },
  true
).finally(() => {
  process.exit(0)
});
