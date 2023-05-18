const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const tokenGenerator = require("../helper/tokenGenerator");

class UserService {
  register = async (data) => {
    const { email, password } = data;
    const user = await User.findOne({ email }).lean();
    if (user) return "User Already Exist!";

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ email, password: hashPassword });

    return tokenGenerator(newUser);
  };

  login = async (data) => {
    const { email, password } = data;
    const user = await User.findOne({ email }).lean();
    if (!user) return "User Does not Exist!";

    const rightPassword = await bcrypt.compare(password, user.password);
    if (!rightPassword) return "Email or Password is Incorrect!";

    return tokenGenerator(user);
  };

  userExist = async (userId) => {
    const user = await User.findById(userId).lean();
    if (!user) return "User Not Exist!";
    if (user && user.role !== "admin") return "Un-Authorise";

    return user;
  };

  deleteUser = async (userId) => {
    return await User.findByIdAndDelete(userId);
  };

  updateUser = async (userId, data) => {
    const user = await User.findById(userId).lean();
    if (!user) return "User Not Exist!";
    if (data.password) data.password = await bcrypt.hash(data.password, 10);
    const updatedUser = await User.findByIdAndUpdate(userId, {
      email: data.email,
      password: data.password || user.password,
      role: data.role || user.role,
    });

    if (!updatedUser) return "Something Went Wrong!!";

    return updatedUser;
  };

  getUsersList = async () => {
    return await User.find().lean();
  };
}

module.exports = UserService;
