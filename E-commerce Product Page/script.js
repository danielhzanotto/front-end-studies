const nav = document.querySelector("nav");
const menuBar = document.getElementById("menu-icon");
const closeBar = document.getElementById("close-nav");

menuBar.addEventListener("click", () => {
  nav.classList.remove("hide");
  nav.classList.add("show-flex");
  menuBar.classList.add("hide");
});
closeBar.addEventListener("click", () => {
  nav.classList.add("hide");
  nav.classList.remove("show-flex");
  menuBar.classList.remove("hide");
});

let widthMatch = window.matchMedia("(min-width: 812px)");
widthMatch.addEventListener("change", function (mm) {
  if (mm.matches) {
    nav.classList.remove("hide");
    nav.classList.remove("show-flex");
    nav.classList.add("show-block");
  } else {
    nav.classList.add("hide");
    nav.classList.remove("show-block");
    menuBar.classList.remove("hide");
  }
});
