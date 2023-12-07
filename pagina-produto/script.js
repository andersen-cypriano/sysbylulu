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
  createDescription: () => {
    const contentDescription = document.createElement('div');
    contentDescription.classList.add('content-description');

    const linkDescription = document.createElement('div')
    linkDescription.innerHTML = `
      <h2 class="button">Descrição do produto <span>e Tabela de medidas</span></h2><span></span>
    `;
    linkDescription.addEventListener('click', e => {
      e.target.nextElementSibling.classList.toggle('show-desc')
    })
    contentDescription.appendChild(linkDescription);
    document.querySelector('#descricao').removeAttribute('class')
    contentDescription.appendChild(document.querySelector('#descricao'));


    document.querySelector('#formCalcularCep').parentElement.before(contentDescription)
  },
  createDevolucoes: ()=> {
    const contentDevolucoes = document.createElement('div');
    contentDevolucoes.classList.add('content-devolucoes');

    const linkDevolucoes = document.createElement('div')
    linkDevolucoes.innerHTML = `
      <h2 class="button">Trocas e devoluções</h2><span></span>
    `;
    linkDevolucoes.addEventListener('click', e => {
      e.target.nextElementSibling.classList.toggle('show-desc')
    })
    contentDevolucoes.appendChild(linkDevolucoes);

    const textDevolucao = document.createElement('p');
    textDevolucao.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum ea harum quidem nam possimus. Odit totam architecto ipsum vero.'
    contentDevolucoes.appendChild(textDevolucao);

    document.querySelector('.content-description').after(contentDevolucoes)
    
  },
  checkMultiColorVariation: () => {
    document.querySelector('.atributo-comum a').innerText.split('/').length > 1 ? document.querySelector('.atributo-comum').classList.add('multi-color') : null;
  },
  init: function () {
    this.cloneButtonShare();
    this.createDescription();
    this.createDevolucoes();
    this.checkMultiColorVariation();
    setTimeout(() => {
      window.matchMedia("(max-width: 700px)").matches ? this.createLogo() : null;
    }, 200);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".pagina-produto") ? singleProduct.init() : null;

});
