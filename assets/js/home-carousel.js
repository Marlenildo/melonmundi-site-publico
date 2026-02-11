document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".mm-carousel[data-carousel]");
  if (!carousels.length) return;

  carousels.forEach((carousel) => {
    const id = carousel.dataset.carousel;
    const track = carousel.querySelector(".mm-carousel-track");
    const slides = Array.from(track?.children || []);
    if (!track || !slides.length) return;

    const desktop = Number(carousel.dataset.slidesDesktop || 2);
    const mobile = Number(carousel.dataset.slidesMobile || 1);
    const autoplayMs = Number(carousel.dataset.autoplay || 0);
    let index = 0;
    let timer = null;

    const prevBtn = document.querySelector(`[data-carousel-prev="${id}"]`);
    const nextBtn = document.querySelector(`[data-carousel-next="${id}"]`);
    const dotsWrap = document.querySelector(`[data-carousel-dots="${id}"]`);

    const slidesPerView = () => (window.innerWidth <= 768 ? mobile : desktop);

    const maxIndex = () => Math.max(0, slides.length - slidesPerView());

    const updateDots = () => {
      if (!dotsWrap) return;
      const current = Math.min(index, maxIndex());
      Array.from(dotsWrap.children).forEach((dot, i) => {
        dot.classList.toggle("active", i === current);
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
    };

    const next = () => {
      index = index >= maxIndex() ? 0 : index + 1;
      update();
    };

    const prev = () => {
      index = index <= 0 ? maxIndex() : index - 1;
      update();
    };

    const startAutoplay = () => {
      if (autoplayMs <= 0) return;
      timer = setInterval(next, autoplayMs);
    };

    const stopAutoplay = () => {
      if (timer) clearInterval(timer);
      timer = null;
    };

    if (dotsWrap) {
      const pages = Math.max(1, slides.length - slidesPerView() + 1);
      for (let i = 0; i < pages; i++) {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.setAttribute("aria-label", `Ir para item ${i + 1}`);
        dot.addEventListener("click", () => {
          index = i;
          update();
        });
        dotsWrap.appendChild(dot);
      }
    }

    prevBtn?.addEventListener("click", prev);
    nextBtn?.addEventListener("click", next);

    carousel.addEventListener("mouseenter", stopAutoplay);
    carousel.addEventListener("mouseleave", startAutoplay);
    prevBtn?.addEventListener("mouseenter", stopAutoplay);
    prevBtn?.addEventListener("mouseleave", startAutoplay);
    nextBtn?.addEventListener("mouseenter", stopAutoplay);
    nextBtn?.addEventListener("mouseleave", startAutoplay);

    window.addEventListener("resize", () => {
      if (dotsWrap) {
        dotsWrap.innerHTML = "";
        const pages = Math.max(1, slides.length - slidesPerView() + 1);
        for (let i = 0; i < pages; i++) {
          const dot = document.createElement("button");
          dot.type = "button";
          dot.setAttribute("aria-label", `Ir para item ${i + 1}`);
          dot.addEventListener("click", () => {
            index = i;
            update();
          });
          dotsWrap.appendChild(dot);
        }
      }
      update();
    });

    update();
    startAutoplay();
  });
});
