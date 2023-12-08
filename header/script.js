const cabecalho = {
  createTopBar: function () {
    const contentHeader = document.querySelector("#cabecalho");
    const contentTopBar = document.createElement("div");
    contentTopBar.classList.add("content-top-bar");

    const contentCenterTopBar = document.createElement("div");
    contentCenterTopBar.classList.add("content-center");

    const alertCupom = document.createElement("p");
    alertCupom.innerHTML = `COMPRE COM O CUPOM <span>#PRIMEIRACOMPRA</span> E <span>GANHE 10% OFF</span>`;

    const contactButtonTopBar = document.createElement("a");
    contactButtonTopBar.setAttribute('href', '#modalContato');
    contactButtonTopBar.setAttribute('data-toggle', 'modal');
    contactButtonTopBar.setAttribute('data-target', '#modalContato');
    contactButtonTopBar.innerHTML = `<span></span> Fale Conosco`;

    contentCenterTopBar.appendChild(alertCupom);
    contentCenterTopBar.appendChild(contactButtonTopBar);
    contentTopBar.prepend(contentCenterTopBar);

    contentHeader.prepend(contentTopBar);
  },
  createContentSearch: () => {
    const btnMiniMenu = document.createElement("div");
    btnMiniMenu.className = "btn-mini-menu";
    btnMiniMenu.addEventListener("click", () => {
      document
        .querySelector("#cabecalho .menu")
        .classList.toggle("menu-hidden");
    });
    document.querySelector(".conteudo-topo").prepend(btnMiniMenu);
    document
      .querySelector(".conteudo-topo")
      .appendChild(document.querySelector("#form-buscar"));
  },
  miniheader: () => {
    const cabecalho = document.querySelector("#cabecalho");
    function setMiniHeader() {
      cabecalho.classList.add("mini-header");
      document.querySelector("#cabecalho .menu").classList.add("menu-hidden");
    }
    function removeMiniHeader() {
      cabecalho.classList.remove("mini-header");
      document
        .querySelector("#cabecalho .menu")
        .classList.remove("menu-hidden");
    }
    window.addEventListener("scroll", () => {
      window.scrollY > 173 ? setMiniHeader() : removeMiniHeader();
    });
  },
  addButtonsMiniHeader: () => {
    // button contact
    const buttonContact = document
      .querySelector(".content-top-bar a")
      .cloneNode(true);
    buttonContact.classList.add("btn-contact");

    // btn mini header
    document.querySelector(".conteudo-actions").appendChild(buttonContact);
  },
  initDesktop: function () {
    this.createTopBar();
    this.createContentSearch();
    this.addButtonsMiniHeader();
    this.miniheader();
  },
  // MOBILE
  cloneButtonsMobile: () => {
    document
      .querySelector(".conteudo-actions")
      .prepend(document.querySelector(".menu-handler"));

    const contentSearch = document.querySelector(".busca");
    contentSearch.classList.add("content-search-mobile");
    document.querySelector(".main-header > .span6").after(contentSearch);

    // MINI HEADER
    const btnMenuMini = document.querySelector(".menu-handler").cloneNode(true);
    btnMenuMini.addEventListener("click", () => {
      document.querySelector("nav button").click();
    });
    
    document
    .querySelector(".conteudo-topo.span3.hidden-phone")
    .appendChild(btnMenuMini);
    
    const btnSearch = document.querySelector(".toggle-search").cloneNode(true);
    btnSearch.addEventListener('click', ()=> {
       document.querySelector('.content-search-mobile').classList.toggle('content-search-mobile-show')
    })
    document
      .querySelector(".conteudo-topo.span3.hidden-phone")
      .appendChild(btnSearch);
  },
  miniHeaderMobile: () => {
    function setMiniHeaderMobile() {
      document
        .querySelector(".main-header")
        .classList.add("mini-header-mobile");
      document.querySelector(".content-top-bar").style.display = "none";
    }

    function removeMiniHeaderMobile() {
      document
        .querySelector(".main-header")
        .classList.remove("mini-header-mobile");
      document.querySelector(".content-top-bar").style.display = "block";
    }

    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setMiniHeaderMobile() : removeMiniHeaderMobile();
    });
  },
  mainMenu: () => {
    document.querySelectorAll('.com-filho > a').forEach(element => {
      element.addEventListener('click', e => {
        e.preventDefault();
        document.querySelectorAll('.show-menu-dois').forEach(element => {
          element.classList.remove('show-menu-dois')
        })
        document.querySelectorAll('.opened').forEach(element => {
          element.classList.remove('opened')
        })
        element.parentElement.classList.toggle('opened')
        element.nextElementSibling.classList.toggle('show-menu-dois')
      })
    })

    // create top menu
    const topMenu = document.createElement('p');
    topMenu.classList.add('top-menu');
    topMenu.textContent = 'MENU';
    document.querySelector('.menu').prepend(topMenu)
  },
  setLinksMObile: () => {
    const elLi = document.createElement('li');
    elLi.appendChild(document.querySelector('.menu-carrinho a'));
    document.querySelector('.menu-carrinho').before(elLi);
    document.querySelector('.menu-carrinho').remove();
    
    const elLiUser = document.createElement('li');
    elLiUser.appendChild(document.querySelector('.actions-menu').children[3].children[0]);

    document.querySelector('.actions-menu').children[3].remove();
    document.querySelector('.actions-menu').children[3].before(elLiUser);
  },
  initMobile: function () {
    this.createTopBar();
    this.cloneButtonsMobile();
    this.miniHeaderMobile();
    this.mainMenu();
    this.setLinksMObile();
  },
};


const newsletter = {
  subtitle: () => {

    const subtitleNews = document.createElement('p');
    subtitleNews.textContent = 'Não se preocupe, também não gostamos de Spam!';
    
    document.querySelector('#barraNewsletter .newsletter-cadastro.input-conteiner').after(subtitleNews)
    
  },
  createContentBg: ()=> {
    const content = document.createElement('div');
    content.classList.add('content-bg-news')
    document.querySelector('#barraNewsletter').appendChild(content)
  },
  init: function () {
    this.subtitle();
  }
}

const sliders = {
  miniBanner: () => {
    document.querySelector('.mini-banner #smarthint-home-position3').remove();
    document.querySelector('.mini-banner #blank-home-position3').remove();
    $('.row-fluid.banner.mini-banner.hidden-phone').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      
    });
  },
  init: function () {
    this.miniBanner();
  }
}

function isDesktop () {
  cabecalho.initDesktop();
}
function isMobile () {
  cabecalho.initMobile();
  // sliders.init();
}


document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".main-header") !== null &&
  window.matchMedia("(max-width: 700px)").matches == false
    ? isDesktop ()
    : isMobile();

    // HOME
    document.querySelector('#barraNewsletter') ? newsletter.init() : null;
});
