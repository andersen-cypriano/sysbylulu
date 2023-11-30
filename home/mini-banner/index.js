const miniBanner = {
  createSlider: () => {
    const contentSlider = document.createElement('div');
    contentSlider.classList.add('content-slider-mini-banner')
    contentSlider.innerHTML = `<ul class="slides"></ul>`




    document.querySelector('.mini-banner').before(contentSlider)
    document.querySelectorAll('.mini-banner .slides li > a').forEach(element => {
      const elLi = document.createElement('li');
      elLi.appendChild(element)
      document.querySelector('.content-slider-mini-banner ul').appendChild(elLi)
    })
    // document.querySelector('.mini-banner').remove();

    $('.content-slider-mini-banner').flexslider({
      animation: "slide",
      animationLoop: false,
      itemMargin: 0,
      minItems: 1,
      maxItems: 1
    });
  },
  init: function () {

   window.matchMedia("(max-width: 700px)").matches
    ? this.createSlider ()
    : null;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('.mini-banner')  ? miniBanner.init() : null;
});