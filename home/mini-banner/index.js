const miniBanner = {
  changeTitle: () => {
    document.querySelector('.vitrine-lancamento').textContent = 'Sale';
  },
  createSlider: () => {
    $(document.querySelector('.listagem-linha > div')).slick();
  },
  init: function () {
   this.changeTitle();

   window.matchMedia("(max-width: 700px)").matches
    ? this.createSlider ()
    : null;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('.vitrine-lancamento')  ? miniBanner.init() : null;
});