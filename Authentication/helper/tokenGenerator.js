const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (user) => {
  const id = user._id;

  const token = jwt.sign({ id }, process.env.JWT_SECRET);

  return { token, user };
};
