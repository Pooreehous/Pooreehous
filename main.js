const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".mobile-menu--open");

hamburger.addEventListener("click", (e) => {
  hamburger.classList.toggle("is-active");
  menu.classList.toggle("mobile-menu--visible");
});
