const carrinho = {
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
  init: function () {
    setTimeout(() => {
      window.matchMedia("(max-width: 700px)").matches ? this.createLogo() : null;
    }, 200);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".pagina-carrinho") ? carrinho.init() : null;

});
