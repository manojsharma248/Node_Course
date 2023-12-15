const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
let _db;
const mongoConnect = (callback) => {
  MongoClient.connect(
    `mongodb+srv://Mani:S9FHYgrYHQma7pRh@cluster0.7mzkqc4.mongodb.net/shop?retryWrites=true&w=majority`
  )
    .then((client) => {
      console.log("Connection established");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log("Error", err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
