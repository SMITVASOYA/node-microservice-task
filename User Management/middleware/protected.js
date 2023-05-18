const jwt = require("jsonwebtoken");
const axios = require("axios");

module.exports = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const { data } = await axios.get(
    `${process.env.AUTHENTICATION_SERVER}/${decoded.id}`
  );

  if (!data) throw new Error("Un-authorised !", 400);
  next();
};
