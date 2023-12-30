const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const feedRoutes = require("./routes/feed");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use("/Images", express.static(path.join(__dirname, "Images")));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
// Get /feed/posts
app.use("/feed", feedRoutes);
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

mongoose
  .connect(
    "mongodb+srv://Mani:S9FHYgrYHQma7pRh@cluster0.7mzkqc4.mongodb.net/messages?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(1234);
  })
  .catch((err) => {
    consoel.log(err);
  });
