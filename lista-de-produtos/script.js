const productListFeatures = {
  createProductList: (qtd) => {
    const contentList = document.createElement('div');
    contentList.classList.add('listagem-vitrine-lancamentos')
    const ul = document.createElement('ul');
    ul.classList.add('slides')
    

    const title = document.createElement('h1');
    title.textContent = 'Sale'
    contentList.appendChild(title)
    contentList.appendChild(ul)
    document.querySelector('#listagemProdutos .vitrine-lancamento').parentElement.before(contentList) 

    document.querySelectorAll('#listagemProdutos .vitrine-lancamento + ul .listagem-item').forEach(element => {
      element.removeAttribute('class');
      element.removeAttribute('style');
      const li = document.createElement('li');
      li.appendChild(element)
      document.querySelector('.listagem-vitrine-lancamentos ul').appendChild(li)
    })
    document.querySelector('#listagemProdutos .vitrine-lancamento').parentElement.remove()
    $('.listagem-vitrine-lancamentos').flexslider({
      animation: "slide",
      animationLoop: false,
      itemWidth: 210,
      itemMargin: 5,
      minItems: 2,
      maxItems: 4
    });
  },
  init: function() {
    window.matchMedia("(max-width: 700px)").matches ? this.createProductList(2) : this.createProductList(4);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('.vitrine-lancamento') ? productListFeatures.init() : null;
});
