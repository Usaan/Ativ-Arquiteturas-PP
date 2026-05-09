const { Router } = require("express");
const TaskController = require("../controllers/TaskController");

const router = Router();

router.post("/add", TaskController.createTaskSave);
router.post("/remove", TaskController.removeTask);
router.post("/edit", TaskController.updateTaskPost);
router.post("/updatestatus", TaskController.toggleTaskStatus);

router.get("/edit/:id", TaskController.updateTask)
router.get("/add", TaskController.createTask); // Renderizar view
router.get("/", TaskController.showTasks); // Renderizar view


module.exports = router;
