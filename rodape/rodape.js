const rodape = {
  moveContents: ()=> {
    document.querySelector('#rodape .conteiner .row-fluid .row-fluid').prepend(document.querySelector('.contact-data'))
    document.querySelector('#rodape .contact-data').appendChild(document.querySelector('.lista-redes'))

    document.querySelector('.sobre-loja-rodape').prepend(document.querySelector('.logo').cloneNode(true))

    document.querySelector('.pagamento-selos + div .row-fluid div:nth-of-type(2)').appendChild(document.querySelector('.logo-mt'))
    document.querySelector('.pagamento-selos + div .row-fluid div:nth-of-type(2)').removeAttribute('style')
  },
  changeTitle: () => {
    document.querySelector('.selos .titulo').textContent = 'Selos de segurança';
  },
  init: function () {
    this.moveContents();
    this.changeTitle();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('#rodape') && document.querySelector('.selos') ? rodape.init() : null;
});