/**
 * Presenter para Home
 * Atua como intermediário entre Model e View
 * Controla a lógica de apresentação
 */
module.exports = class HomePresenter {
  constructor(view) {
    this.view = view;
  }

  /**
   * Renderiza a home page
   */
  async renderHome() {
    const data = {
      architecture: "MVP",
      description: "Model-View-Presenter",
      features: [
        "Presenter atua como intermediário",
        "View é passiva e não conhece o Model",
        "Presenter controla a View e atualiza o Model",
      ],
    };

    this.view.render("home", data);
  }
};
