const ultimaChance = {
  createProductList: (qtd) => {
    const contentList = document.createElement('div');
    contentList.classList.add('listagem-vitrine-destaques')
    const ul = document.createElement('ul');
    ul.classList.add('slides')
    

    // const title = document.createElement('h1');
    // title.textContent = 'Última Chance'
    // contentList.appendChild(title)
    contentList.appendChild(ul)
    document.querySelector('#barraNewsletter').after(contentList) 

    document.querySelectorAll('#listagemProdutos .vitrine-destaque + ul .listagem-item').forEach(element => {
      element.removeAttribute('class');
      element.removeAttribute('style');
      const li = document.createElement('li');
      li.appendChild(element)
      document.querySelector('.listagem-vitrine-destaques ul').appendChild(li)
    })

    // Remove title and ul of product list cloned before
    document.querySelector('#listagemProdutos .vitrine-destaque').nextElementSibling.remove()
    document.querySelector('#listagemProdutos .vitrine-destaque').remove()
    
    $('.listagem-vitrine-destaques').flexslider({
      animation: "slide",
      animationLoop: false,
      itemWidth: 210,
      itemMargin: 5,
      minItems: 2,
      maxItems: 2
    });

    const btnNav = (el, classname) => {
      const btn = document.createElement(el);
      btn.classList.add(classname)

      return btn
    }

    const btnPrev = btnNav('div', 'btn-prev');
    const btnNext = btnNav('div', 'btn-next');

    btnPrev.addEventListener('click', ()=> {
      document.querySelector('.listagem-vitrine-destaques .flex-nav-prev a').click()
    })
    btnNext.addEventListener('click', ()=> {
      document.querySelector('.listagem-vitrine-destaques .flex-nav-next a').click()
    })
    document.querySelector('.listagem-vitrine-destaques .flex-viewport').appendChild(btnPrev);
    document.querySelector('.listagem-vitrine-destaques .flex-viewport').appendChild(btnNext);


  },
  createBanner: () => {
    const contentBannerListagem = document.querySelector('.listagem-vitrine-destaques')
    contentBannerListagem.prepend(document.querySelector('.tarja > a'));
  },
  init: function() {
    window.matchMedia("(max-width: 700px)").matches ? this.createProductList(2) : this.createProductList(4);
    this.createBanner();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('.vitrine-destaque') ? ultimaChance.init() : null;
});
