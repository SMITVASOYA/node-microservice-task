const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.DB)
  .then((data) => console.log(`Database connected to the ${data}`))
  .catch(() => console.log("database connection error"));
