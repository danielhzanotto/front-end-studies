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

const buttonBack = document.getElementById("go-back");
const buttonNext = document.getElementById("button-next");
const buttonSubmit = document.getElementById("button-submit");

let index = 0;

function changeNav(element) {
  index = navList.indexOf(element);

  for (i = 0; i < 4; i++) {
    navList[i].classList.remove("selected");
    sectionList[i].classList.add("hide");
  }
  element.classList.add("selected");
  sectionList[index].classList.remove("hide");

  buttonNext.classList.remove("hide");
  buttonSubmit.classList.add("hide");
}

function moveForm(direction) {
  buttonNext.classList.remove("hide");
  buttonSubmit.classList.add("hide");
  buttonBack.classList.remove("disabled");

  navList[index].classList.remove("selected");
  sectionList[index].classList.add("hide");

  if (direction == "next") {
    index++;
  } else if (direction == "back") {
    index--;
  }

  navList[index].classList.add("selected");
  sectionList[index].classList.remove("hide");
}

buttonBack.addEventListener("click", () => {
  if (index > 0) {
    moveForm("back");
  }
  if (index == 0) {
    buttonBack.classList.add("disabled");
  }
});

buttonNext.addEventListener("click", () => {
  if (index < 3) {
    moveForm("next");
  }
  if (index == 3) {
    buttonNext.classList.add("hide");
    buttonSubmit.classList.remove("hide");
  }
});

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
  buttonNext.classList.add("hide");
  buttonSubmit.classList.remove("hide");
});

const planChanger = document.querySelectorAll("span.plan-change");
const yearPromotion = document.getElementsByClassName("year-contract");

const monthMethod = document.getElementById("month");
const yearMethod = document.getElementById("year");

monthMethod.addEventListener("click", () => {
  for (i = 0; i < 3; i++) {
    yearPromotion[i].classList.add("hide");
  }
  for (i = 0; i < 8; i++) {
    planChanger[i].innerHTML = "/mo";
  }
});
yearMethod.addEventListener("click", () => {
  for (i = 0; i < 3; i++) {
    yearPromotion[i].classList.remove("hide");
  }
  for (i = 0; i < 8; i++) {
    planChanger[i].innerHTML = "0/yr";
  }
});

let planValue = 15;

document.getElementById("select-plan").addEventListener("click", () => {
  const ele = document.getElementsByName("plan");
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      planValue = parseInt(
        ele[i].nextElementSibling
          .querySelector("p")
          .innerHTML.slice(2, 4)
          .replace("<", "")
      );

      document.getElementById("plan-info").innerHTML =
        ele[i].nextElementSibling.querySelector("div").innerHTML;
      document
        .getElementById("plan-info")
        .querySelector("h6")
        .classList.add("hide");
    }
  }
  changeSummary();
  totalCalc();
});

let addValue = [0, 0, 0];
const checkboxIds = ["online-service", "larger-storage", "custom-profile"];

function addOnSummary(check, summary) {
  let checkbox = document.getElementById(check);
  let div = document.getElementById(summary);
  if (checkbox.checked) {
    div.innerHTML = checkbox.nextElementSibling.innerHTML;
    div.querySelector("p").classList.add("hide");
    for (i = 0; i < 3; i++) {
      if (checkboxIds[i] == check) {
        addValue[i] = parseInt(
          checkbox.nextElementSibling.querySelector("h6").innerHTML[3]
        );
      }
    }
  } else {
    div.innerHTML = "";
    for (i = 0; i < 3; i++) {
      if (checkboxIds[i] == check) {
        addValue[i] = 0;
      }
    }
  }
  totalCalc();
}

function changeSummary() {
  addOnSummary("online-service", "on-serv");
  addOnSummary("larger-storage", "lar-sto");
  addOnSummary("custom-profile", "cus-prof");
}

function totalCalc() {
  document.getElementById("valor-total").innerHTML =
    addValue.reduce((a, b) => a + b, 0) + planValue;
}

document.querySelector(".add-ons-content").addEventListener("click", () => {
  changeSummary();
});

// buttonSubmit.addEventListener("click", () => {
//   for (i = 0; i < document.forms[0].elements.length; i++) {
//     if (document.forms[0][i].checked) {
//       console.log("");
//       console.log(document.forms[0][i].value);
//       console.log(document.forms[0][i].name);
//     }
//   }
// });
