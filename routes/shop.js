const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../utils/path");

const adminData = require("./admin");

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    docTitle: "shop",
    hasProduct: products.length > 0,
  });
});

module.exports = router;
