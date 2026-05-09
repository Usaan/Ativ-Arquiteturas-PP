const TaskModel = require("../shared-backend/models/TaskModel");

/**
 * ViewModel para Tasks
 * Responsável por preparar e formatar dados para a View
 * Implementa lógica de apresentação e transformação de dados
 */
module.exports = class TaskViewModel {
  /**
   * Prepara dados para exibição da view de criação
   */
  static async getCreateViewModel() {
    return {
      architecture: "MVVM",
    };
  }

  /**
   * Prepara dados para exibição de todas as tarefas
   * Formata os dados do Model para apresentação
   */
  static async getAllTasksViewModel() {
    const tasks = await TaskModel.findAll({ raw: true });

    // ViewModel pode adicionar lógica de formatação/transformação
    const formattedTasks = tasks.map((task) => ({
      ...task,
      statusText: task.done ? "Concluída" : "Pendente",
      createdAtFormatted: new Date(task.createdAt).toLocaleDateString("pt-BR"),
    }));

    return {
      tasks: formattedTasks,
      architecture: "MVVM",
      totalTasks: tasks.length,
      completedTasks: tasks.filter((t) => t.done).length,
      pendingTasks: tasks.filter((t) => !t.done).length,
    };
  }

  /**
   * Prepara dados para criação de uma nova tarefa
   */
  static async createTaskViewModel(taskData) {
    const task = {
      title: taskData.title,
      description: taskData.description,
      done: false,
    };

    await TaskModel.create(task);

    return {
      success: true,
      message: "Tarefa criada com sucesso",
    };
  }

  /**
   * Prepara dados para remoção de tarefa
   */
  static async removeTaskViewModel(taskId) {
    await TaskModel.destroy({ where: { id: taskId } });

    return {
      success: true,
      message: "Tarefa removida com sucesso",
    };
  }

  /**
   * Prepara dados para edição de tarefa
   */
  static async getEditTaskViewModel(taskId) {
    const task = await TaskModel.findOne({ where: { id: taskId }, raw: true });

    return {
      task,
      architecture: "MVVM",
    };
  }

  /**
   * Atualiza tarefa com dados do formulário
   */
  static async updateTaskViewModel(taskId, taskData) {
    const task = {
      title: taskData.title,
      description: taskData.description,
    };

    await TaskModel.update(task, { where: { id: taskId } });

    return {
      success: true,
      message: "Tarefa atualizada com sucesso",
    };
  }

  /**
   * Alterna status da tarefa (done/undone)
   */
  static async toggleTaskStatusViewModel(taskId, currentStatus) {
    const status = {
      done: currentStatus === "0" ? true : false,
    };

    await TaskModel.update(status, { where: { id: taskId } });

    return {
      success: true,
      newStatus: status.done,
    };
  }
};
