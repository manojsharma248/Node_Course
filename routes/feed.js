const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const feedConroller = require("../controller/feed");
const isAuth = require("../middleware/is-auth");

router.get("/posts", isAuth, feedConroller.getPosts);
router.post(
  "/post",
  [body("title").trim().isLength({ min: 5 })],
  [body("content").trim().isLength({ min: 5 })],
  feedConroller.createPost
);
router.get("/post/:postId", feedConroller.getPost);
router.put(
  "/post/:postId",
  [body("title").trim().isLength({ min: 5 })],
  [body("content").trim().isLength({ min: 5 })],
  feedConroller.updatePost
);
router.delete("/post/:postId", feedConroller.deletePost);

module.exports = router;
