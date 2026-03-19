(() => {
  const body = document.body;
  if (!body) return;

  const path = window.location.pathname.toLowerCase();
  const isHome = path === "/" || path.endsWith("/index.html");
  if (isHome && !body.classList.contains("home-page")) {
    body.classList.add("home-page", "home-at-top");
  }

  if (!body.classList.contains("home-page")) return;
  const header = document.getElementById("quarto-header");

  const syncHeaderOffset = () => {
    const bodyOffset = parseFloat(window.getComputedStyle(body).paddingTop) || 0;
    const headerOffset = header ? header.offsetHeight : 0;
    const offset = Math.max(bodyOffset, headerOffset, 64);
    body.style.setProperty("--mm-nav-offset", `${offset}px`);
  };

  const syncNavbarState = () => {
    const atTop = window.scrollY <= 8;
    body.classList.toggle("home-at-top", atTop);
  };

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
