const User = require("../models/user");
exports.getLogin = (req, res, next) => {
  // console.log(req.get("Cookie"));
  // const isLoggedIn = req.get("Cookie").trim().split("=")[1] === "true";
  console.log(req.session);
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthticated: false,
  });
};

exports.postLogin = (req, res, next) => {
  User.findById("6583d41329848f4b08c8d389")
    .then((user) => {
      req.session.user = user;
      req.session.isLoggedIn = true;
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};
