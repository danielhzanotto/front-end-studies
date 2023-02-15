const featuresNav = document.getElementById("features-nav");
const featuresDrop = document.getElementById("features-drop");
const companyNav = document.getElementById("company-nav");
const companyDrop = document.getElementById("company-drop");

featuresNav.addEventListener("mouseover", () => {
  document.getElementById("arrow-feature").src = "images/flecha-cima.png";
  featuresDrop.classList.remove("hide");
  featuresDrop.classList.add("show");
});
featuresNav.addEventListener("mouseout", () => {
  document.getElementById("arrow-feature").src = "images/flecha-baixo.png";
  featuresDrop.classList.remove("show");
  featuresDrop.classList.add("hide");
});

companyNav.addEventListener("mouseover", () => {
  document.getElementById("arrow-company").src = "images/flecha-cima.png";
  companyDrop.classList.remove("hide");
  companyDrop.classList.add("show");
});
companyNav.addEventListener("mouseout", () => {
  document.getElementById("arrow-company").src = "images/flecha-baixo.png";
  companyDrop.classList.remove("show");
  companyDrop.classList.add("hide");
});

const menuBar = document.getElementById("menu-bar");
const navBar = document.querySelector("nav");
const closeBar = document.getElementById("close-bar");

menuBar.addEventListener("click", () => {
  navBar.classList.remove("hide");
  navBar.classList.add("show-bar");
  menuBar.classList.remove("show-menu");
  menuBar.classList.add("hide");
  closeBar.classList.remove("hide");
  closeBar.classList.add("show-menu");

  featuresDrop.classList.remove("hide");
  featuresDrop.classList.add("show");
  companyDrop.classList.remove("hide");
  companyDrop.classList.add("show");
  featuresDrop.style.position = "relative";
  companyDrop.style.position = "relative";
});
closeBar.addEventListener("click", () => {
  navBar.classList.add("hide");
  navBar.classList.remove("show-bar");
  menuBar.classList.add("show-menu");
  menuBar.classList.remove("hide");
  closeBar.classList.add("hide");
  closeBar.classList.remove("show-menu");

  featuresDrop.classList.remove("show");
  featuresDrop.classList.add("hide");
  companyDrop.classList.remove("show");
  companyDrop.classList.add("hide");
  featuresDrop.style.position = "absolute";
  companyDrop.style.position = "absolute";
});

let widthMatch = window.matchMedia("(min-width: 768px)");
widthMatch.addEventListener("change", function (mm) {
  if (mm.matches) {
    navBar.classList.remove("hide");
    navBar.classList.remove("show-bar");
    closeBar.classList.add("hide");
    menuBar.classList.add("hide");

    featuresDrop.classList.remove("show");
    featuresDrop.classList.add("hide");
    companyDrop.classList.remove("show");
    companyDrop.classList.add("hide");
    featuresDrop.style.position = "absolute";
    companyDrop.style.position = "absolute";
  } else {
    menuBar.classList.remove("hide");
    menuBar.classList.add("show-menu");
  }
});
