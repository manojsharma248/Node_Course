const path = require("path"); // Importing the path module from Node.js
const express = require("express"); // Importing the express module
const shopController = require("../controllers/shop"); // Importing the shop controller module
const router = express.Router(); // Creating an instance of the express Router

router.get("/", shopController.getIndex); // Handling GET requests to the root URL and calling the getIndex function from the shop controller
router.get("/products", shopController.getProducts); // Handling GET requests to the "/products" URL and calling the getProducts function from the shop controller
router.get("/products/:productId", shopController.getProduct); // Handling GET requests to the "/products/:productId" URL and calling the getProduct function from the shop controller
router.get("/cart", shopController.getCart); // Handling GET requests to the "/cart" URL and calling the getCart function from the shop controller
router.post("/cart", shopController.postCart); // Handling POST requests to the "/cart" URL and calling the postCart function from the shop controller
router.post("/cart-delete-item", shopController.postCartDeleteProduct); // Handling POST requests to the "/cart-delete-item" URL and calling the postCartDeleteProduct function from the shop controller

router.post("/create-order", shopController.postOrder);
router.get("/orders", shopController.getOrders);

module.exports = router; // Exporting the router module
