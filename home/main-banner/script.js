const mainBanner = {
  createBanner: () => {
    const newBanner = document.createElement('div');
    
    
    newBanner.classList.add('main-banner');
    document.querySelector('.secao-banners').before(newBanner);
    
    
    const itensSlider = Array.from(document.querySelector('.banner .slides').children)

    const ul = document.createElement('ul');
    ul.classList.add('slides')
    newBanner.appendChild(ul)

    itensSlider.forEach(element => {
      element.removeAttribute('style');
      element.removeAttribute('class');
      ul.appendChild(element)
    })

    // document.querySelector('.secao-banners').remove();

    $('.main-banner').flexslider({
      animation: "slide"
    });

  },
  init: function () {
    this.createBanner();
  }
}


document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('.secao-banners') ? mainBanner.init() : null;
});