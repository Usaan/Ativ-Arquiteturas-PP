const { Router } = require("express");
const HomeViewModel = require("../viewmodels/HomeViewModel");

const home = Router();

home.get("/", async (_req, res) => {
  const viewModel = await HomeViewModel.getHomeViewModel();
  res.render("home", viewModel);
});

module.exports = home;
