const paginas = {
  removeElEmpty: () => {
    document.querySelectorAll(".conteudo p").forEach((element) => {
      element.innerHTML == "&nbsp;" ? element.remove() : null;
    });
  },
  init: function () {
    this.removeElEmpty()
  }
};
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('.pagina-pagina') ? paginas.init() : null;
});

