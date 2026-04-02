document.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector(".footer .nav-footer");
  const template = document.getElementById("footer-credit-template");

  if (!footer || !template || footer.querySelector(".footer-credit-line")) {
    return;
  }

  const creditLine = template.content.firstElementChild;
  if (!creditLine) {
    return;
  }

  footer.appendChild(creditLine.cloneNode(true));
});
