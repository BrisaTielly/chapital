const imagensJs = document.querySelectorAll(".js-art-images img");
const infoJs = document.querySelectorAll(".js-info ");
const slideJs = document.querySelectorAll(".js-slide li");
const artigoJs = document.querySelectorAll(".js-artigos div");
const storeJs = document.querySelector(".js-store");
const storeDivJs = document.querySelectorAll(".js-store-div li");

if (imagensJs.length && infoJs.length) {
  function initScrollSuave() {
    function scrollSuave() {
      imagensJs.forEach((imagem) => {
        const windowTop = imagem.getBoundingClientRect().top;
        const windowSize = windowTop - window.innerHeight * 0.8;
        if (windowSize < 0) {
          imagem.classList.add("ativo");
        } else {
          imagem.classList.remove("ativo");
        }
      });

      infoJs.forEach((texto) => {
        const windowTop = texto.getBoundingClientRect().top;
        const windowSize = windowTop - window.innerHeight * 0.8;
        if (windowSize < 0) {
          texto.classList.add("ativo");
        } else {
          texto.classList.remove("ativo");
        }
      });

      slideJs.forEach((imagemsl) => {
        const distance = imagemsl.getBoundingClientRect().top;
        const distanceSize = distance - window.innerHeight * 0.8;
        if (distanceSize < 0) {
          imagemsl.classList.add("ativo");
        } else {
          imagemsl.classList.remove("ativo");
        }
      });

      artigoJs.forEach((artigo) => {
        const windowTop = artigo.getBoundingClientRect().top;
        const windowMetade = windowTop - window.innerHeight * 0.8;
        if (windowMetade < 0) {
          artigo.classList.add("ativo");
        } else {
          artigo.classList.remove("ativo");
        }
      });

      function initStoreJs() {
        const windowTop = storeJs.getBoundingClientRect().top;
        const windowMetade = windowTop - window.innerHeight * 0.8;
        if (windowMetade < 0) {
          storeJs.classList.add("ativo");
        } else {
          storeJs.classList.remove("ativo");
        }
      }

      storeDivJs.forEach((element) => {
        const windowTop = element.getBoundingClientRect().top;
        const windowMetade = windowTop - window.innerHeight * 0.8;
        if (windowMetade < 0) {
          element.classList.add("ativo");
        } else {
          element.classList.remove("ativo");
        }
      });

      initStoreJs();
      //
    }

    scrollSuave();

    window.addEventListener("scroll", scrollSuave);
  }
}
initScrollSuave();

const introducaoTitulo = document.querySelector(".introducao h1");

function pageTitle() {
  introducaoTitulo.classList.add("animated");
}

pageTitle();

function smoothNav() {
  const linksInternos = document.querySelectorAll('[href^="#"]');

  // Evento que acontece ao clicar no link interno
  function scrollInterno(event) {
    event.preventDefault();

    // Essa constante href foi feita para, quando clicarmos no link interno o currentTarget identifica onde foi clicado, e seleciona o atributo dele, nesse caso o ID
    const href = event.currentTarget.getAttribute("href");

    // Essa constante section foi feita para procurar dentro do documento html os elementos que tenham a ID clicada, assim linkando o clique com o elemento html
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((item) => {
    item.addEventListener("click", scrollInterno);
  });
}

smoothNav();

function cronometer() {
  let i = 0;

  setInterval(() => {
    i++;
  }, 1000);
}

cronometer();

function menuButton() {
  const hamburguerButton = document.querySelector('[data-menu="hamburguer"]');
  const closedMenu = document.querySelector('[data-menu="ul"]');

  hamburguerButton.addEventListener("click", handleClick);

  function handleClick(event) {
    event.preventDefault();
    closedMenu.classList.toggle("active");
  }

  document.addEventListener("click", handleOutsideClick);

  // Basicamente se nao tiver nenhum evento de click dentro do menu e também o click for fora do hamburguer, a classe active vai ser removida
  function handleOutsideClick(event) {
    if (
      !closedMenu.contains(event.target) &&
      event.target !== hamburguerButton
    ) {
      closedMenu.classList.remove("active");
    }
  }
}

menuButton();
