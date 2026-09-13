/**
 * Revela os blocos `.reveal` conforme entram na viewport.
 *
 * Usa `rootMargin` negativo em vez de `threshold` alto para que blocos mais
 * altos que a tela também sejam revelados. Sem IntersectionObserver (ou com
 * movimento reduzido), tudo aparece de imediato.
 */
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");
  if (!reveals.length) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reducedMotion || typeof IntersectionObserver === "undefined") {
    reveals.forEach((el) => el.classList.add("active"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0 }
  );

  reveals.forEach((el) => observer.observe(el));
});
