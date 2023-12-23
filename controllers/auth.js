exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthticated: req.isLoggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  req.isLoggedIn = true;
  res.redirect("/");
};
