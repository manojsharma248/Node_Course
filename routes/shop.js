const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../utils/path");

const adminData = require("./admin");
const productController = require("../controller/products");

router.get("/", productController.getProducts);

module.exports = router;
