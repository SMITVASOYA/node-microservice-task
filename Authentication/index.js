const express = require("express");
const userRoute = require("./routes/userRoute");
const cors = require("cors");
const startUpscript = require("./startUpScript");
require("dotenv").config();
require("./connection/config");

const app = express();
app.use(express.json());
app.use(cors());

// create by default admin user
startUpscript();
// routing
app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server Started at port ${process.env.PORT}`);
});
