const mysql = require("mysql2");
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "8$9vCtWF9213",
});

module.exports = pool.promise();
