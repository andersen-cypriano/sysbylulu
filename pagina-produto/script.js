const singleProduct = {
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
  cloneButtonShare: () => {
    const contentShare = document.createElement('div');
    contentShare.classList.add('content-share');

    const button = document.createElement('div');
    button.textContent = 'Compartilhar';
    button.addEventListener('click', e=> {
      e.target.nextElementSibling.classList.toggle('show-share')
    })
    
    contentShare.appendChild(button)

    
    const contentButtons = document.createElement('div');
    contentButtons.appendChild(document.querySelector('.fb-compartilhar'));
    contentButtons.appendChild(document.querySelector('a[href^="https://api.whatsapp.com"'))
    contentShare.appendChild(contentButtons);
    
    const buttonFavorite = document.createElement('div');
    buttonFavorite.classList.add('button-favorite');
    buttonFavorite.textContent = 'LISTA DE DESEJOS';
    buttonFavorite.addEventListener('click', ()=> {
      
      window.location = `https://sis-by-lulu-manutencao.lojaintegrada.com.br/conta/favorito/${document.querySelector('body').classList[1].split('-')[1]}/adicionar`
    })
    const span = document.createElement('span');
    buttonFavorite.prepend(span);

   

    document.querySelectorAll('.principal .acoes-produto > div:nth-child(1)').forEach(element => {
      element.appendChild(contentShare)
    })

    document.querySelectorAll('.principal .acoes-produto > div:nth-child(2)').forEach(element => {
      element.appendChild(buttonFavorite)
    })
    
    document.querySelector('.produto-compartilhar').remove();
  },
  init: function () {
    this.cloneButtonShare();
    setTimeout(() => {
      window.matchMedia("(max-width: 700px)").matches ? this.createLogo() : null;
    }, 200);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".pagina-produto") ? singleProduct.init() : null;



  // window.matchMedia("(max-width: 700px)").matches ? categoria.initMobile() : null;
});
