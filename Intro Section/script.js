const featuresNav = document.getElementById("features-nav");
const featuresDrop = document.getElementById("features-drop");
const companyNav = document.getElementById("company-nav");
const companyDrop = document.getElementById("company-drop");

const menuBar = document.getElementById("menu-bar");
const navBar = document.querySelector("nav");
const closeBar = document.getElementById("close-bar");

function isOn(element, show) {
  element.classList.remove("hide");
  element.classList.add(show);
}
function isOff(element, show) {
  element.classList.add("hide");
  element.classList.remove(show);
}
function changePosition(position) {
  if (position == "relative") {
    isOn(featuresDrop, "show");
    isOn(companyDrop, "show");
  } else if (position == "absolute") {
    isOff(featuresDrop, "show");
    isOff(companyDrop, "show");
  }
  featuresDrop.style.position = position;
  companyDrop.style.position = position;
}

featuresNav.addEventListener("mouseover", () => {
  document.getElementById("arrow-feature").src = "images/flecha-cima.png";
  isOn(featuresDrop, "show");
});
featuresNav.addEventListener("mouseout", () => {
  document.getElementById("arrow-feature").src = "images/flecha-baixo.png";
  isOff(featuresDrop, "show");
});

companyNav.addEventListener("mouseover", () => {
  document.getElementById("arrow-company").src = "images/flecha-cima.png";
  isOn(companyDrop, "show");
});
companyNav.addEventListener("mouseout", () => {
  document.getElementById("arrow-company").src = "images/flecha-baixo.png";
  isOff(companyDrop, "show");
});

menuBar.addEventListener("click", () => {
  isOff(menuBar, "show-menu");
  isOn(navBar, "show-bar");
  isOn(closeBar, "show-menu");

  changePosition("relative");
});
closeBar.addEventListener("click", () => {
  isOn(menuBar, "show-menu");
  isOff(navBar, "show-bar");
  isOff(closeBar, "show-menu");

  changePosition("absolute");
});

let widthMatch = window.matchMedia("(min-width: 768px)");
widthMatch.addEventListener("change", function (mm) {
  if (mm.matches) {
    navBar.classList.remove("hide");
    navBar.classList.remove("show-bar");
    isOff(menuBar, "show-menu");
    isOff(closeBar, "show-menu");

    changePosition("absolute");
  } else {
    isOn(menuBar, "show-menu");
  }
});
