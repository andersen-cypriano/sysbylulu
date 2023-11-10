const cabecalho = {
  createTopBar: function () {
    const contentHeader = document.querySelector('#cabecalho');
    const contentTopBar = document.createElement('div');
    contentTopBar.classList.add('content-top-bar')
    const contentCenterTopBar = document.createElement('div');
    contentCenterTopBar.classList.add('content-center')
    
    const alertCupom = document.createElement('p');
    alertCupom.innerHTML = `COMPRE COM O CUPOM <span>#PRIMEIRACOMPRA</span> E <span>GANHE 10% OFF</span>`;

    const contactButtonTopBar = document.createElement('a');
    contactButtonTopBar.innerHTML = `<span>#</span> Fale Conosco`;

    contentCenterTopBar.appendChild(alertCupom);
    contentCenterTopBar.appendChild(contactButtonTopBar);
    contentTopBar.prepend(contentCenterTopBar);

    contentHeader.prepend(contentTopBar);
  },
  init: function () {
    this.createTopBar();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('.main-header') !== null ? 
  cabecalho.init() : null;
});
