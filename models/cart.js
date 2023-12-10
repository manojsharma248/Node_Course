const fs = require("fs");
const path = require("path");
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "cart.json"
);
module.exports = class Cart {
  static addProduct(id, productPrice) {
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      //Analyze the cars => Find the existing product
      let existingProductIndex = cart.products.findIndex(
        (product) => product.id === id
      );
      let existingProduct = cart.products[existingProductIndex];
      let updatedProduct;
      //Add new product/increse quantity
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qyt = updatedProduct.qyt + 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qyt: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      cart.totalPrice = cart.totalPrice + +productPrice;
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
    //fetch the prev card
  }
};
