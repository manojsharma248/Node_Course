const express = require("express");
const router = express.Router();
const feedConroller = require("../controller/feed");

router.get("/posts", feedConroller.getPosts);
router.post("/post", feedConroller.createPost);

module.exports = router;
