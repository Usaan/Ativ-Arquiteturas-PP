const { Router } = require("express");
const HomePresenter = require("../presenters/HomePresenter");
const ViewAdapter = require("../views/ViewAdapter");

const home = Router();

home.get("/", async (req, res) => {
  const view = new ViewAdapter(res);
  const presenter = new HomePresenter(view);
  await presenter.renderHome();
});

module.exports = home;
