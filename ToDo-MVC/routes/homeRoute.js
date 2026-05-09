const { Router } = require("express");

const HomeController = require("../controllers/HomeController");
const home = Router();

home.get("/", HomeController.renderHome);

module.exports = home;
