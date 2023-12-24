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
  req.session.isLoggedIn = true;
  res.redirect("/");
};
