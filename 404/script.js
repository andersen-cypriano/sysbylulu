const errorPage = {
  addClassOnBody: () => {
    document.querySelector('body').classList.add('pagina-erro')
  },

  init: function () {
    this.addClassOnBody();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".box-destaque") && document.querySelector(".box-destaque .titulo").textContent == 'Página não encontrada' ? errorPage.init() : null;

});