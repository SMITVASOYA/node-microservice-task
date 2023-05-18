const User = require("./models/userSchema");
const bcrypt = require("bcrypt");

module.exports = async () => {
  const user = await User.findOne({ role: "admin" });

  if (!user) {
    const adminUser = await User.create({
      email: "admin@gmail.com",
      password: await bcrypt.hash("Abcd@1234", 10),
      role: "admin",
    });

    if (adminUser) {
      console.log("Admin User Created Successfully!! ");
    }
  }
};
