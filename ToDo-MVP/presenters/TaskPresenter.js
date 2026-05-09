const TaskModel = require("../shared-backend/models/TaskModel");

/**
 * Presenter para Tasks
 * Responsável por intermediar comunicação entre Model e View
 * Controla a lógica de apresentação e manipula a View
 */
module.exports = class TaskPresenter {
  constructor(view) {
    this.view = view;
  }

  /**
   * Renderiza view de criação de tarefa
   */
  async showCreateForm() {
    this.view.render("tasks/create", {
      architecture: "MVP",
    });
  }

  /**
   * Renderiza todas as tarefas
   * Presenter busca dados do Model e passa para a View
   */
  async showAllTasks() {
    try {
      const tasks = await TaskModel.findAll({ raw: true });

      this.view.render("tasks/all", {
        tasks,
        architecture: "MVP",
      });
    } catch (error) {
      this.view.renderError("Erro ao carregar tarefas");
    }
  }

  /**
   * Cria uma nova tarefa
   * Presenter valida dados e interage com o Model
   */
  async createTask(taskData) {
    try {
      const task = {
        title: taskData.title,
        description: taskData.description,
        done: false,
      };

      await TaskModel.create(task);
      this.view.redirect("/tasks");
    } catch (error) {
      this.view.renderError("Erro ao criar tarefa");
    }
  }

  /**
   * Remove uma tarefa
   */
  async removeTask(taskId) {
    try {
      await TaskModel.destroy({ where: { id: taskId } });
      this.view.redirect("/tasks");
    } catch (error) {
      this.view.renderError("Erro ao remover tarefa");
    }
  }

  /**
   * Renderiza formulário de edição
   */
  async showEditForm(taskId) {
    try {
      const task = await TaskModel.findOne({
        where: { id: taskId },
        raw: true,
      });

      if (!task) {
        this.view.renderError("Tarefa não encontrada");
        return;
      }

      this.view.render("tasks/edit", {
        task,
        architecture: "MVP",
      });
    } catch (error) {
      this.view.renderError("Erro ao carregar tarefa");
    }
  }

  /**
   * Atualiza uma tarefa existente
   */
  async updateTask(taskId, taskData) {
    try {
      const task = {
        title: taskData.title,
        description: taskData.description,
      };

      await TaskModel.update(task, { where: { id: taskId } });
      this.view.redirect("/tasks");
    } catch (error) {
      this.view.renderError("Erro ao atualizar tarefa");
    }
  }

  /**
   * Alterna status da tarefa
   */
  async toggleTaskStatus(taskId, currentStatus) {
    try {
      const status = {
        done: currentStatus === "0" ? true : false,
      };

      await TaskModel.update(status, { where: { id: taskId } });
      this.view.redirect("/tasks");
    } catch (error) {
      this.view.renderError("Erro ao atualizar status");
    }
  }
};
