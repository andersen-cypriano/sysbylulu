const miniBanner = {
  changeTitle: () => {
    document.querySelector('.vitrine-lancamento').textContent = 'Sales';
  },
  init: function () {
   this.changeTitle();
  }
}

document.querySelector('.vitrine-lancamento')  ? miniBanner.init() : null;
