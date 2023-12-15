const mongodb = require("mongodb");
const MongoClient = mongodb.mongodbClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    `mongodb+srv://Mani:S9FHYgrYHQma7pRh@cluster0.7mzkqc4.mongodb.net/?retryWrites=true&w=majority`
  )
    .then((client) => {
      console.log("Connection established");
      callback(client);
    })
    .catch((err) => {
      console.log("Error", err);
    });
};

module.exports = mongoConnect;
