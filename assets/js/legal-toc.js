/**
 * Índice lateral das páginas legais.
 *
 * Os documentos legais são longos e o conteúdo vem de markdown dentro de um
 * bloco HTML bruto, o que deixa o sumário nativo do Quarto vazio. Este script
 * monta o índice a partir dos `h2` do próprio painel e marca a seção visível.
 *
 * O índice só existe onde há espaço para ele (ver `.legal-toc` no CSS): em
 * telas estreitas fica oculto e o texto ocupa a largura toda.
 */
document.addEventListener("DOMContentLoaded", () => {
  const holder = document.querySelector("[data-legal-toc]");
  const panel = document.querySelector(".legal-panel");
  if (!holder || !panel) return;

  // O Quarto põe o id na <section class="level2"> que envolve o título, não no
  // próprio h2 (que guarda apenas `data-anchor-id`).
  const secoes = Array.from(panel.querySelectorAll("section.level2[id]"))
    .map((secao) => ({ alvo: secao, id: secao.id, titulo: secao.querySelector("h2") }))
    .filter((item) => item.titulo);

  const itens = secoes.length
    ? secoes
    : Array.from(panel.querySelectorAll("h2[id]")).map((h) => ({
        alvo: h,
        id: h.id,
        titulo: h,
      }));

  if (itens.length < 3) return;

  const title = document.createElement("p");
  title.className = "legal-toc-title";
  title.textContent = "Nesta página";

  const list = document.createElement("ul");
  list.className = "legal-toc-list";

  const links = new Map();
  itens.forEach(({ id, titulo }) => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = `#${encodeURIComponent(id)}`;
    link.textContent = titulo.textContent.trim();
    item.appendChild(link);
    list.appendChild(item);
    links.set(id, link);
  });

  const nav = document.createElement("nav");
  nav.appendChild(title);
  nav.appendChild(list);
  holder.appendChild(nav);
  holder.classList.add("is-ready");

  if (typeof IntersectionObserver === "undefined") return;

  let ativo = null;
  const marcar = (id) => {
    if (ativo === id) return;
    if (ativo && links.has(ativo)) links.get(ativo).classList.remove("active");
    ativo = id;
    if (links.has(id)) links.get(id).classList.add("active");
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visiveis = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visiveis.length) marcar(visiveis[0].target.id);
    },
    // A faixa estreita no topo faz o destaque acompanhar a leitura em vez de
    // saltar para a última seção que entrou na tela.
    { rootMargin: "-15% 0px -75% 0px", threshold: 0 }
  );

  itens.forEach(({ alvo }) => observer.observe(alvo));
});
