const navList = [
  document.getElementById("page-1").querySelector("button"),
  document.getElementById("page-2").querySelector("button"),
  document.getElementById("page-3").querySelector("button"),
  document.getElementById("page-4").querySelector("button"),
];

const sectionList = [
  document.getElementById("personal-info"),
  document.getElementById("select-plan"),
  document.getElementById("add-ons"),
  document.getElementById("summary"),
];

function changeNav(element) {
  let index = navList.indexOf(element);
  console.log(index);
  for (i = 0; i < 4; i++) {
    navList[i].classList.remove("selected");
    sectionList[i].classList.add("hide");
  }
  element.classList.add("selected");
  sectionList[index].classList.remove("hide");
}

navList[0].addEventListener("click", function (e) {
  changeNav(e.target);
});
navList[1].addEventListener("click", function (e) {
  changeNav(e.target);
});
navList[2].addEventListener("click", function (e) {
  changeNav(e.target);
});
navList[3].addEventListener("click", function (e) {
  changeNav(e.target);
});

const nomeSubmit = document.querySelector("#POST-name").value;
const emailSubmit = document.querySelector("#POST-email").value;
const phoneSubmit = document.querySelector("#POST-phone").value;
const submitButton = document.querySelector("input.next-step");
submitButton.addEventListener("click", function () {
  console.log(nomeSubmit);
});
