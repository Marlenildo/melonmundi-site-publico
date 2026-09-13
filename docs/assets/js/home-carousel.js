/**
 * Carrossel da home.
 *
 * Marcação esperada:
 *   <div class="mm-carousel" data-carousel="id" data-autoplay="6000"
 *        data-slides-desktop="1" data-slides-mobile="1">
 *     <div class="mm-carousel-track"> ...slides... </div>
 *   </div>
 *   <button data-carousel-prev="id"> / <button data-carousel-next="id">
 *   <div class="mm-carousel-dots" data-carousel-dots="id"></div>
 *
 * Recursos: navegação por botões, bolinhas, teclado e arraste (touch/mouse),
 * autoplay com pausa em hover/foco/aba oculta e respeito a
 * `prefers-reduced-motion`.
 */
document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".mm-carousel[data-carousel]");
  if (!carousels.length) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  carousels.forEach((carousel) => {
    const id = carousel.dataset.carousel;
    const track = carousel.querySelector(".mm-carousel-track");
    const slides = Array.from(track ? track.children : []);
    if (!track || !slides.length) return;

    const desktop = Number(carousel.dataset.slidesDesktop || 1);
    const mobile = Number(carousel.dataset.slidesMobile || 1);
    const autoplayMs = Number(carousel.dataset.autoplay || 0);

    const scope = carousel.closest(".showcase-carousel-wrap") || document;
    const prevBtn =
      scope.querySelector(`[data-carousel-prev="${id}"]`) ||
      document.querySelector(`[data-carousel-prev="${id}"]`);
    const nextBtn =
      scope.querySelector(`[data-carousel-next="${id}"]`) ||
      document.querySelector(`[data-carousel-next="${id}"]`);
    const dotsWrap = document.querySelector(`[data-carousel-dots="${id}"]`);

    let index = 0;
    let timer = null;
    let paused = false;

    const slidesPerView = () => (window.innerWidth <= 768 ? mobile : desktop);
    const maxIndex = () => Math.max(0, slides.length - slidesPerView());
    const pageCount = () => maxIndex() + 1;

    carousel.setAttribute("role", "region");
    carousel.setAttribute("aria-roledescription", "carrossel");
    carousel.setAttribute("tabindex", "0");
    slides.forEach((slide, i) => {
      slide.setAttribute("role", "group");
      slide.setAttribute("aria-roledescription", "slide");
      slide.setAttribute("aria-label", `${i + 1} de ${slides.length}`);
    });

    const syncAria = () => {
      const spv = slidesPerView();
      slides.forEach((slide, i) => {
        const visible = i >= index && i < index + spv;
        slide.setAttribute("aria-hidden", visible ? "false" : "true");
      });
    };

    const buildDots = () => {
      if (!dotsWrap) return;
      dotsWrap.innerHTML = "";
      for (let i = 0; i < pageCount(); i++) {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.setAttribute("aria-label", `Ir para o item ${i + 1}`);
        dot.addEventListener("click", () => {
          goTo(i);
          restartAutoplay();
        });
        dotsWrap.appendChild(dot);
      }
    };

    const updateDots = () => {
      if (!dotsWrap) return;
      Array.from(dotsWrap.children).forEach((dot, i) => {
        const active = i === index;
        dot.classList.toggle("active", active);
        dot.setAttribute("aria-current", active ? "true" : "false");
      });
    };

    const update = () => {
      const spv = slidesPerView();
      const width = 100 / spv;
      slides.forEach((slide) => {
        slide.style.flexBasis = `${width}%`;
      });
      index = Math.min(index, maxIndex());
      track.style.transform = `translateX(-${index * width}%)`;
      updateDots();
      syncAria();
    };

    const goTo = (target) => {
      const last = maxIndex();
      if (target < 0) index = last;
      else if (target > last) index = 0;
      else index = target;
      update();
    };

    const next = () => goTo(index + 1);
    const prev = () => goTo(index - 1);

    const startAutoplay = () => {
      stopAutoplay();
      if (autoplayMs <= 0 || paused || reducedMotion.matches) return;
      if (pageCount() <= 1) return;
      timer = window.setInterval(next, autoplayMs);
    };

    const stopAutoplay = () => {
      if (timer) window.clearInterval(timer);
      timer = null;
    };

    const restartAutoplay = () => {
      stopAutoplay();
      startAutoplay();
    };

    const pause = () => {
      paused = true;
      stopAutoplay();
    };

    const resume = () => {
      paused = false;
      startAutoplay();
    };

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        prev();
        restartAutoplay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        next();
        restartAutoplay();
      });
    }

    [carousel, prevBtn, nextBtn].forEach((el) => {
      if (!el) return;
      el.addEventListener("mouseenter", pause);
      el.addEventListener("mouseleave", resume);
      el.addEventListener("focusin", pause);
      el.addEventListener("focusout", resume);
    });

    carousel.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        prev();
        restartAutoplay();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
        restartAutoplay();
      }
    });

    // Arraste horizontal (touch e mouse) via Pointer Events.
    let dragStartX = null;
    let dragging = false;

    carousel.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      dragStartX = event.clientX;
      dragging = true;
      pause();
    });

    const endDrag = (event) => {
      if (!dragging || dragStartX === null) return;
      const delta = event.clientX - dragStartX;
      dragging = false;
      dragStartX = null;
      if (Math.abs(delta) > 45) {
        if (delta < 0) next();
        else prev();
      }
      resume();
    };

    carousel.addEventListener("pointerup", endDrag);
    carousel.addEventListener("pointercancel", () => {
      dragging = false;
      dragStartX = null;
      resume();
    });

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stopAutoplay();
      else startAutoplay();
    });

    let resizeTimer = null;
    window.addEventListener("resize", () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        buildDots();
        update();
      }, 150);
    });

    if (typeof reducedMotion.addEventListener === "function") {
      reducedMotion.addEventListener("change", restartAutoplay);
    }

    buildDots();
    update();
    startAutoplay();
  });
});
