module.exports = class HomeController {
  static renderHome(_req, res) {
    res.render("home", { architecture: "MVC" });
  }
};
