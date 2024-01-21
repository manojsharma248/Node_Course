const User = require("../models/user");
const bcrypt = require("bcryptjs");
const validator = require("validator");

module.exports = {
  createUser: async function ({ userInput }, req) {
    const { email, name, password } = userInput;
    const errors = [];

    if (!validator.isEmail(email)) {
      errors.push({ message: "Email is invalid!" });
    }

    if (
      validator.isEmpty(password) ||
      !validator.isLength(password, { min: 5 })
    ) {
      errors.push({ message: "Password must be at least 5 characters" });
    }

    if (errors.length > 0) {
      throw new Error("Invalid input!");
    }

    const existingUser = await User.findOne({ email }, "_id");
    if (existingUser) {
      throw new Error(`User ${email} already exists`);
    }

    const hashPassword = await bcrypt.hash(password, 12);
    const user = new User({ email, name, password: hashPassword });

    const createdUser = await user.save();
    return { ...createdUser._doc, _id: createdUser._id.toString() };
  },
};
