const products = [];
module.exports = class Product {
  constructor(t) {
    console.log("title", t);
    this.title = t;
  }
  save() {
    products.push(this);
  }
  static fetchAll() {
    return products;
  }
};
