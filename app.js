const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { engine } = require("express-handlebars");
const rootDir = require("./utils/path");

const app = express();
app.engine("hbs", engine({ defaultLayout: false }));
app.set("view engine", "hbs");
app.set("views", "./views");
const errorController = require("./controller/error");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);
app.listen(3000);
