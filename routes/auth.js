const express = require("express");
const router = express.Router();
const authContoller = require("../controllers/auth");

router.get("/login", authContoller.getLogin);

module.exports = router;
