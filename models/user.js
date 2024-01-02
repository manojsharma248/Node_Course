const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  email: {
    Type: String,
    required: true,
  },
  password: {
    Type: String,
    required: true,
  },
  name: {
    Type: String,
    required: true,
  },
  status: {
    Type: String,
    required: true,
  },
  posts: {
    type: Schema.Types.ObjectId,
    ref: "Post",
  },
});
module.exports = mongoose.model("User", userSchema);
