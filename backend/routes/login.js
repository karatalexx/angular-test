const express = require("express");
const router = express.Router();
const UserController = require('../controller/UserController');

router.post("/", UserController.authenticate);

module.exports = router;
