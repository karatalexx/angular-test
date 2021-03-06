const express = require("express");
const app = express();
require("./dbConnect");
const cors = require('cors')
const bodyParser = require("body-parser");
const { authMiddleware } = require("./middleware/authMiddleware");

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
// app.use(bodyParser.json());

app.use("/login", require("./routes/login"));
app.use("/sign-up", require("./routes/sign-up"));
app.use("/ping", authMiddleware, require("./routes/ping"));
app.use("/offer", authMiddleware, require("./routes/offer"));

module.exports = app;
