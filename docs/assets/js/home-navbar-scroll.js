/**
 * Estado da navbar sobre os heros em tela cheia.
 *
 * As classes do `<body>` (`home-page`, `home-at-top`, `about-page`) vêm do
 * front matter via `body-classes`, ou seja, já chegam no HTML — este script
 * apenas mede a altura do cabeçalho fixo (`--mm-nav-offset`) e alterna
 * `home-at-top` conforme a rolagem. Nada aqui é responsável por esconder
 * conteúdo, para que não exista flash na primeira pintura.
 */
(() => {
  const body = document.body;
  if (!body) return;

  const header = document.getElementById("quarto-header");
  const hasHero =
    body.classList.contains("home-page") || body.classList.contains("about-page");

  const syncHeaderOffset = () => {
    const bodyOffset = parseFloat(window.getComputedStyle(body).paddingTop) || 0;
    const headerOffset = header ? header.offsetHeight : 0;
    const offset = Math.max(bodyOffset, headerOffset, 64);
    body.style.setProperty("--mm-nav-offset", `${offset}px`);
  };

  const syncNavbarState = () => {
    if (!body.classList.contains("home-page")) return;
    body.classList.toggle("home-at-top", window.scrollY <= 8);
  };

  if (!hasHero) return;

  syncHeaderOffset();
  syncNavbarState();

  window.addEventListener("scroll", syncNavbarState, { passive: true });
  window.addEventListener("resize", syncHeaderOffset);
  window.addEventListener("load", () => {
    syncHeaderOffset();
    syncNavbarState();
  });
  window.addEventListener("pageshow", () => {
    syncHeaderOffset();
    syncNavbarState();
  });
})();
