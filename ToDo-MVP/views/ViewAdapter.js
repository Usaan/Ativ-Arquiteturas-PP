/**
 * ViewAdapter
 * Adapta o objeto de resposta do Express para ser usado pelo Presenter
 * Encapsula a lógica de renderização e redirecionamento
 */
class ViewAdapter {
  constructor(res) {
    this.res = res;
  }

  render(template, data = {}) {
    this.res.render(template, data);
  }

  redirect(path) {
    this.res.redirect(path);
  }

  renderError(message) {
    this.res.status(500).send(`<h1>Erro</h1><p>${message}</p>`);
  }
}

module.exports = ViewAdapter;
