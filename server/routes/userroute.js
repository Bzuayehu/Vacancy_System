const express = require("express"); 
const userController = require("../controller/userController.js");
const userAuth = require("../middlewares/authMiddleware.js");
const route = express.Router();

route.put("/updateUser",userAuth, userController.updateUserController); 
route.delete("/deleteUser/:id",userAuth, userController.deleteUserController); 
route.get("/getUser", userController.getUsersController); 
module.exports = route;