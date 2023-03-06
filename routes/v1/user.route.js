const express = require("express");
const userController = require("../../controllers/user.controller");

const router = express.Router();
// *********************************

// routes
router.route("/").get(userController.getAllUser).post(userController.SendUser); //users

// *********************************
module.exports = router;
