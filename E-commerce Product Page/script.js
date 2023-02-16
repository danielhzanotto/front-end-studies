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

const thumb1 = document.getElementById("thumb1");
const thumb2 = document.getElementById("thumb2");
const thumb3 = document.getElementById("thumb3");
const thumb4 = document.getElementById("thumb4");
const previous = document.getElementById("previous-arrow");
const next = document.getElementById("next-arrow");

const imgList = [
  document.getElementById("img1"),
  document.getElementById("img2"),
  document.getElementById("img3"),
  document.getElementById("img4"),
];
const thumbList = [thumb1, thumb2, thumb3, thumb4];
let counter = 0;

function changeImages(index) {
  for (let i = 0; i < 4; i++) {
    thumbList[i].classList.remove("thumb-selected");
    imgList[i].classList.add("hide");
  }
  thumbList[index].classList.add("thumb-selected");
  imgList[index].classList.remove("hide");
  counter = index;
}

function getIndex(element) {
  return thumbList.indexOf(element.target);
}

next.addEventListener("click", () => {
  if (counter < 3) {
    counter++;
  } else {
    counter = 0;
  }
  changeImages(counter);
});
previous.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
  } else {
    counter = 3;
  }
  changeImages(counter);
});

thumb1.addEventListener("click", function (e) {
  changeImages(getIndex(e));
});
thumb2.addEventListener("click", function (e) {
  changeImages(getIndex(e));
});
thumb3.addEventListener("click", function (e) {
  changeImages(getIndex(e));
});
thumb4.addEventListener("click", function (e) {
  changeImages(getIndex(e));
});
