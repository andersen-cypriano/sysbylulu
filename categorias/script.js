const categoria = {
  createTopContent: () => {
    const content = document.createElement('div');
    content.classList.add('content-top-category')
    content.appendChild(document.querySelector('.conteudo .titulo'))
    content.appendChild(document.querySelector('.ordenar-listagem'))
    content.appendChild(document.querySelector('.filter-toggle'))


    document.querySelector('.pagina-categoria .conteudo').prepend(content)
  },
  init: function () {
    this.createTopContent();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('.pagina-categoria') ? categoria.init() : null;
});