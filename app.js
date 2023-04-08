const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { engine } = require("express-handlebars");
const rootDir = require("./utils/path");

const app = express();
app.engine("hbs", engine({ defaultLayout: false }));
app.set("view engine", "hbs");
app.set("views", "./views");
// app.set("view engine", "pug");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes.router);
app.use(shopRoutes);
app.use((req, res, next) => {
  res.status(404).render("404");
});
app.listen(3000);
