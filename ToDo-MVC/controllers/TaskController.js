const TaskModel = require("../models/TaskModel");

module.exports = class TaskController {
  static createTask(_req, res) {
    res.render("tasks/create", { architecture: "MVC" });
  }

  static async showTasks(_req, res) {
    const tasks = await TaskModel.findAll({ raw: true });
    res.render("tasks/all", { tasks, architecture: "MVC" });
  }

  static async createTaskSave(req, res) {
    const task = {
      title: req.body.title,
      description: req.body.description,
      done: false,
    };

    await TaskModel.create(task);
    res.redirect("/tasks");
  }

  static async removeTask(req, res) {
    const { id } = req.body;
    await TaskModel.destroy({ where: { id: id } });
    res.redirect("/tasks");
  }

  static async updateTask(req, res) {
    const { id } = req.params;
    const task = await TaskModel.findOne({ where: { id: id }, raw: true });
    res.render("tasks/edit", { task, architecture: "MVC" });
  }

  static async updateTaskPost(req, res) {
    const { id } = req.body;
    const task = {
      title: req.body.title,
      description: req.body.description,
    };
    await TaskModel.update(task, { where: { id: id } });
    res.redirect("/tasks");
  }

  static async toggleTaskStatus(req, res) {
    const { id } = req.body;
    const status = {
      done: req.body.done === "0" ? true : false,
    };
    await TaskModel.update(status, { where: { id: id } });
    res.redirect("/tasks");
  }
};
