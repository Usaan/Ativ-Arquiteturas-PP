/**
 * ViewModel para Home
 * Prepara dados para a view inicial
 */
module.exports = class HomeViewModel {
  static async getHomeViewModel() {
    return {
      architecture: "MVVM",
      description: "Model-View-ViewModel",
      features: [
        "Separação clara entre lógica de apresentação e negócio",
        "ViewModel prepara dados para a View",
        "Data binding (simulado via objetos)",
      ],
    };
  }
};
