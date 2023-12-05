const relatedProducts = {
  changeTitle: () => {
    document.querySelector('.aproveite-tambem > h4.titulo').textContent = 'Você pode gostar também';
  },
  createSlider: () => {
    document.querySelector('.aproveite-tambem .listagem-linha ul').classList.add('slides');
    $(document.querySelector('.aproveite-tambem .listagem-linha .slides').parentElement).flexslider({
      animation: "slide"
    });

  },
  
  init: function () {
    this.changeTitle();
  },
  initMobile: function () {
    setTimeout(() => {
      this.createSlider();
    }, 200);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".aproveite-tambem") ? relatedProducts.init() : null;
  window.matchMedia("(max-width: 700px)").matches ? relatedProducts.initMobile() : null;
});