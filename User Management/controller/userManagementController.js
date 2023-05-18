const axios = require("axios");
const sendResponse = require("../helper/sendResponse");

exports.createUser = async (req, res, next) => {
  try {
    const { data } = await axios.post(
      `${process.env.AUTHENTICATION_SERVER}/register`,
      req.body
    );

    if (!data) throw new Error("Something Went Wrong!!", 400);

    sendResponse(res, data.data, "User Created SuccessFully!!");
  } catch (error) {
    console.log("error in user create by admin", error.message);
    res.status(400).json({ error: error.stack, success: false });
  }
};

exports.getUserList = async (req, res, next) => {
  try {
    const { data } = await axios.get(
      `${process.env.AUTHENTICATION_SERVER}/usersList`
    );

    if (!data) throw new Error("Something Went Wrong!!", 400);

    sendResponse(res, data.data, "Users Fetched SuccessFully!!");
  } catch (error) {
    console.log("error in users list fetch by admin", error.message);
    res.status(400).json({ error: error.stack, success: false });
  }
};

exports.editUser = async (req, res, next) => {
  try {
    const { data } = await axios.patch(
      `${process.env.AUTHENTICATION_SERVER}/editUser/${req.params.userId}`,
      req.body
    );

    if (!data) throw new Error("Something Went Wrong!!", 400);

    sendResponse(res, data.data, "User Updated SuccessFully!!");
  } catch (error) {
    console.log("error in user Update by admin", error.message);
    res.status(400).json({ error: error.stack, success: false });
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const { data } = await axios.delete(
      `${process.env.AUTHENTICATION_SERVER}/deleteUser/${req.params.userId}`
    );

    if (!data) throw new Error("Something Went Wrong!!", 400);

    sendResponse(res, data.data, "User Deleted SuccessFully!!");
  } catch (error) {
    console.log("error in user Delete by admin", error.message);
    res.status(400).json({ error: error.stack, success: false });
  }
};
