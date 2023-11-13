const cabecalho = {
  createTopBar: function () {
    const contentHeader = document.querySelector('#cabecalho');
    const contentTopBar = document.createElement('div');
    contentTopBar.classList.add('content-top-bar')
    
    const contentCenterTopBar = document.createElement('div');
    contentCenterTopBar.classList.add('content-center');
    
    const alertCupom = document.createElement('p');
    alertCupom.innerHTML = `COMPRE COM O CUPOM <span>#PRIMEIRACOMPRA</span> E <span>GANHE 10% OFF</span>`;

    const contactButtonTopBar = document.createElement('a');
    contactButtonTopBar.innerHTML = `<span></span> Fale Conosco`;

    contentCenterTopBar.appendChild(alertCupom);
    contentCenterTopBar.appendChild(contactButtonTopBar);
    contentTopBar.prepend(contentCenterTopBar);

    contentHeader.prepend(contentTopBar);
  },
  createContentSearch: ()=> {
    const btnMiniMenu = document.createElement('div');
    btnMiniMenu.className = 'btn-mini-menu';
    btnMiniMenu.addEventListener('click', () => {
      document.querySelector('#cabecalho .menu').classList.toggle('menu-hidden');
    })
    document.querySelector('.conteudo-topo').prepend(btnMiniMenu)
    document.querySelector('.conteudo-topo').appendChild(document.querySelector('#form-buscar'));
  },
  miniheader: ()=> {
    const cabecalho = document.querySelector('#cabecalho');
    function setMiniHeader () {
      cabecalho.classList.add('mini-header');
      document.querySelector('#cabecalho .menu').classList.add('menu-hidden');
    }
    function removeMiniHeader () {
      cabecalho.classList.remove('mini-header');
      document.querySelector('#cabecalho .menu').classList.aremove('menu-hidden');
    }
    window.scrollY > 0 ?  setMiniHeader () :  removeMiniHeader (); 
    
  },
  addButtonsMiniHeader: () => {
    // button contact
    const buttonContact = document.querySelector('.content-top-bar a').cloneNode(true);
    buttonContact.classList.add('btn-contact');

    // btn mini header
    document.querySelector('.conteudo-actions').appendChild(buttonContact);
  },
  init: function () {
    this.createTopBar();
    this.createContentSearch();
    this.addButtonsMiniHeader();

    window.addEventListener('scroll', ()=> {
      window.matchMedia("(min-width: 769px)").matches ? this.miniheader() : this.removeminiheader();
      
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('.main-header') !== null ? 
  cabecalho.init() : null;
});
