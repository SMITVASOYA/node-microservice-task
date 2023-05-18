const route = require("express").Router();
const userManagementController = require("../controller/userManagementController");
const middleware = require("../middleware/protected");

route.use(middleware);
route.post("/createUser", userManagementController.createUser);
route.get("/getUsers", userManagementController.getUserList);
route.delete("/deleteUser/:userId", userManagementController.deleteUser);
route.patch("/updateUser/:userId", userManagementController.editUser);

module.exports = route;
