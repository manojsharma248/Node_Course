const User = require("../models/user");
const Post = require("../models/post");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const jwt = require("jsonwebtoken");

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
      const error = new Error("Invalid input!");
      error.data = errors;
      error.status = 422;
      throw error;
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
  login: async function ({ email, password }) {
    const user = await User.findOne({ email: email });
    if (!user) {
      const error = new Error("User not found.");
      error.code = 401;
      throw error;
    }

    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      const error = new Error("Password mismatch.");
      error.code = 401;
      throw error;
    }
    const token = jwt.sign(
      {
        userId: user._id.toString(),
        email: user.email,
      },
      "somesupperscecerts",
      { expiresIn: "1h" }
    );
    return { token: token, userId: user._id.toString() };
  },
  createPost: async function ({ postInput, req }) {
    const errors = [];
    console.log("PostInput", postInput.title);
    if (
      validator.isEmpty(postInput.title) ||
      !validator.isLength(postInput.title, { min: 5 })
    ) {
      errors.push("title is invalid.");
    }
    if (
      validator.isEmpty(postInput.content) ||
      !validator.isLength(postInput.content, { min: 5 })
    ) {
      errors.push("content is invalid.");
    }
    if (errors.length > 0) {
      const error = new Error("Invalid input!");
      error.data = errors;
      error.status = 422;
      throw error;
    }
    const post = new Post({
      title: postInput.title,
      content: postInput.content,
      imageUrl: postInput.imageUrl,
    });
    const createPost = await post.save();
    //add posts to users post
    return {
      ...createPost._doc,
      _id: createPost._id.toString(),
      createdAt: createPost.createdAt.toISOString(),
      updatedAt: createPost.updatedAt.toISOString(),
    };
  },
};
