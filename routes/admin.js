const express = require("express");
const path = require("path");
const router = express.Router();
const productController = require("../controller/products");

router.get("/add-product", productController.getAddProduct);
router.post("/add-product", productController.postAddProduct);

module.exports = router;
