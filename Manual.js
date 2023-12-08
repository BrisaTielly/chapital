// Navegacão suave para links internos
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
