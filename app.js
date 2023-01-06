const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/add-product", (req, res, next) => {
  res.send(
    "<form method='post' action='/product'><input type='text' name='title'><button type='submit'>Add Product</button></form>"
  );
});
app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
app.use("/", (req, res, next) => {
  res.send("<h1>hello express</h1>");
});
app.listen(3000);
