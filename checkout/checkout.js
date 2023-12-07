const checkout = {
  insertLogoOnFooter: () => {
    const logoLi = document.createElement('div');
    logoLi.innerHTML = `<a href="https://www.lojaintegrada.com.br?utm_source=lojas&amp;utm_medium=rodape&amp;utm_campaign=sis-by-lulu-manutencao.lojaintegrada.com.br" title="Loja Integrada - Plataforma de loja virtual." target="_blank" style="opacity: 1 !important; display: inline-block !important; visibility: visible !important; margin: 0 !important; position: static !important; overflow: visible !important;">
    <img src="https://cdn.awsli.com.br/production/static/whitelabel/lojaintegrada/img/logo-rodape-loja.png?v=c94e5c8" alt="Logomarca Loja Integrada" style="opacity: 1 !important; display: inline !important; visibility: visible !important; margin: 0 !important; position: static !important; max-width: 1000px !important; max-height: 1000px !important; width: auto !important; height: auto !important;">
  </a>`
    document.querySelector('.logo-mt').prepend(logoLi)
  },
  init: function () {
    this.insertLogoOnFooter();
  }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.carrinho-checkout') ? checkout.init() : null;
});