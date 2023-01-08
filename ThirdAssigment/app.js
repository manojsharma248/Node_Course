const express = require("express");
const path = require("path");
const homeRouter = require("./routes/home");
const usersRouter = require("./routes/users");

const rootDir = require("./utils/path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(homeRouter);
app.use(usersRouter);

app.listen(3000);
