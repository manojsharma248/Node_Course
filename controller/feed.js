const { validationResult } = require("express-validator");
const Post = require("../models/post");
exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "First Post",
        content: "This is the first post",
        imageUrl: "images/duck.jpg",
        creator: {
          name: "Mani",
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: "Validation failed,enter the correct data",
      errors: errors.array(),
    });
  }
  const title = req.body.title;
  const content = req.body.content;
  console.log(title, content);
  const post = new Post({
    title: title,
    content: content,
    creator: {
      name: "Mani",
    },
    imageUrl: "images/duck.jpg",
  });
  post
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Your post has been created",
        post: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
