const categoria = {
  createTopContent: () => {
    const content = document.createElement("div");
    content.classList.add("content-top-category");
    content.appendChild(document.querySelector(".conteudo .titulo"));
    content.appendChild(document.querySelector(".ordenar-listagem"));
    content.appendChild(document.querySelector(".filter-toggle"));

    document.querySelector(".pagina-categoria .conteudo").prepend(content);
  },
  createLogo: () => {
    const logo = document.createElement("h1");
    logo.classList.add("logo");

    
    logo.innerHTML = `
    <a href="/" title="Sis by Lulu">    
      <img src="${document.querySelector('.institucional h2 img').src}" alt="Sis by Lulu">
    </a>
    `;

    document.querySelector('.main-header > .span6').appendChild(logo);

    document.querySelector('#barraTopo').remove();
  },
  createTopFilter: () => {

    const contentTopFilter = document.createElement('div');
    contentTopFilter.classList.add('top-filter');
    contentTopFilter.innerHTML = `
      <p>Filtros</p>
      <span></span>
    `

    document.querySelector('.secao-principal .coluna').prepend(contentTopFilter)
    document.querySelector('.top-filter span').addEventListener('click', ()=> {
      document.querySelector('.coluna.span3.open').classList.toggle('open')
    })
  },
  init: function () {
    document.querySelector(".conteudo .titulo") == null ? null : this.createTopContent();
    setTimeout(() => {
      this.createLogo();
    }, 200);
  },
  initMobile: function () {
    this.createTopFilter();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".pagina-categoria") ? categoria.init() : null;
  window.matchMedia("(max-width: 700px)").matches ? categoria.initMobile() : null;
});
