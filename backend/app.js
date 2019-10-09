const express = require("express");
const app = express();
require("./dbConnect");
const bodyParser = require("body-parser");
const { authMiddleware } = require("./middleware/authMiddleware");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
// app.use(bodyParser.json());

app.use("/login", require("./routes/login"));
app.use("/sign-up", require("./routes/sign-up"));
app.use("/ping", authMiddleware, require("./routes/ping"));

module.exports = app;
