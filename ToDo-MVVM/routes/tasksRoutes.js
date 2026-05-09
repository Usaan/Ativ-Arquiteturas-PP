const { Router } = require("express");
const TaskViewModel = require("../viewmodels/TaskViewModel");

const router = Router();

// POST routes - Actions
router.post("/add", async (req, res) => {
  await TaskViewModel.createTaskViewModel(req.body);
  res.redirect("/tasks");
});

router.post("/remove", async (req, res) => {
  await TaskViewModel.removeTaskViewModel(req.body.id);
  res.redirect("/tasks");
});

router.post("/edit", async (req, res) => {
  await TaskViewModel.updateTaskViewModel(req.body.id, req.body);
  res.redirect("/tasks");
});

router.post("/updatestatus", async (req, res) => {
  await TaskViewModel.toggleTaskStatusViewModel(req.body.id, req.body.done);
  res.redirect("/tasks");
});

// GET routes - Views
router.get("/edit/:id", async (req, res) => {
  const viewModel = await TaskViewModel.getEditTaskViewModel(req.params.id);
  res.render("tasks/edit", viewModel);
});

router.get("/add", async (_req, res) => {
  const viewModel = await TaskViewModel.getCreateViewModel();
  res.render("tasks/create", viewModel);
});

router.get("/", async (_req, res) => {
  const viewModel = await TaskViewModel.getAllTasksViewModel();
  res.render("tasks/all", viewModel);
});

module.exports = router;
