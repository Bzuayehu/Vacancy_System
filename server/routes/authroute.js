const express = require("express");
const authcontroller = require("../controller/authcontroller");
const route = express.Router();

route.post("/register", authcontroller.registerController);
route.post("/login", authcontroller.loginController);
module.exports = route;
