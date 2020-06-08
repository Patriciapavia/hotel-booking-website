let header = document.querySelector(".header");
let hamburgerMenu = document.querySelector(".hamburger-menu");
window.addEventListener("scroll", function () {
  let windownPosition = window.scrollY > 0;
  header.classList.toggle("active", windownPosition);
});

hamburgerMenu.addEventListener("click", function () {
  header.classList.toggle("menu-open");
});
