const { Router } = require("express");
const TaskPresenter = require("../presenters/TaskPresenter");
const ViewAdapter = require("../views/ViewAdapter");

const router = Router();

// POST routes - Actions
router.post("/add", async (req, res) => {
  const view = new ViewAdapter(res);
  const presenter = new TaskPresenter(view);
  await presenter.createTask(req.body);
});

router.post("/remove", async (req, res) => {
  const view = new ViewAdapter(res);
  const presenter = new TaskPresenter(view);
  await presenter.removeTask(req.body.id);
});

router.post("/edit", async (req, res) => {
  const view = new ViewAdapter(res);
  const presenter = new TaskPresenter(view);
  await presenter.updateTask(req.body.id, req.body);
});

router.post("/updatestatus", async (req, res) => {
  const view = new ViewAdapter(res);
  const presenter = new TaskPresenter(view);
  await presenter.toggleTaskStatus(req.body.id, req.body.done);
});

// GET routes - Views
router.get("/edit/:id", async (req, res) => {
  const view = new ViewAdapter(res);
  const presenter = new TaskPresenter(view);
  await presenter.showEditForm(req.params.id);
});

router.get("/add", async (req, res) => {
  const view = new ViewAdapter(res);
  const presenter = new TaskPresenter(view);
  await presenter.showCreateForm();
});

router.get("/", async (req, res) => {
  const view = new ViewAdapter(res);
  const presenter = new TaskPresenter(view);
  await presenter.showAllTasks();
});

module.exports = router;
