const UserService = require("../services/userService");
const userService = new UserService();
const sendResponse = require("../helper/sendResponse");

exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      throw new Error("Please provide Email and Password", 400);

    const user = await userService.register(req.body);

    if (typeof user === "string") throw new Error(user, 400);

    sendResponse(res, user, "User Registered Successfully!");
  } catch (error) {
    console.log("Error in Register User", error);
    res.status(400).json({ error: error.stack, success: false });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      throw new Error("Please provide Email and Password", 400);

    const user = await userService.login(req.body);

    if (typeof user === "string") throw new Error(user, 400);

    sendResponse(res, user, "User Logged-In Successfully!");
  } catch (error) {
    console.log("Error in Login User", error);
    res.status(400).json({ error: error.stack, success: false });
  }
};

exports.userExist = async (req, res, next) => {
  try {
    const userExist = await userService.userExist(req.params.userId);

    if (typeof userExist === "string") throw new Error(userExist, 400);

    sendResponse(res, userExist, "authorised");
  } catch (error) {
    console.log("Error in Check User ", error.message);
    res.status(400).json({ error: error.stack, success: false });
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const userDeleted = await userService.deleteUser(req.params.userId);

    if (typeof userDeleted === "string") throw new Error(userDeleted, 400);

    sendResponse(res, userDeleted, "User Deleted");
  } catch (error) {
    console.log("Error in delete User ", error.message);
    res.status(400).json({ error: error.stack, success: false });
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const updatedUser = await userService.updateUser(
      req.params.userId,
      req.body
    );

    if (typeof updatedUser === "string") throw new Error(updatedUser, 400);

    sendResponse(res, updatedUser, "user Updated");
  } catch (error) {
    console.log("Error in update User ", error.message);
    res.status(400).json({ error: error.stack, success: false });
  }
};

exports.getUsersList = async (req, res, next) => {
  try {
    const UsersList = await userService.getUsersList();

    if (typeof UsersList === "string") throw new Error(UsersList, 400);

    sendResponse(res, UsersList, "Users List Fetched");
  } catch (error) {
    console.log("Error in Users List", error.message);
    res.status(400).json({ error: error.stack, success: false });
  }
};
