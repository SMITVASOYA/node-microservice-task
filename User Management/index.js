const express = require("express");
require("./connection/config");
require("dotenv").config();
const cors = require("cors");
const userManagementRoute = require("./routes/userManagementRoutes");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1", userManagementRoute);

app.listen(process.env.PORT, async () => {
  console.log(`Server Started at port ${process.env.PORT}`);
});
