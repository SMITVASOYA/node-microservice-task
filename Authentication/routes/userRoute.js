const route = require("express").Router();
const userController = require("../controller/userController");

route.post("/register", userController.register);
route.post("/login", userController.login);

// this is used in the other microservice call
route.get("/:userId", userController.userExist);
route.get("/getUsers", userController.userExist);
route.patch("/editUser/:userId", userController.userExist);
route.delete("/deleteUser/:userId", userController.userExist);

module.exports = route;
