const mobileBtn = document.getElementById("compartilhar");
const nav = document.querySelector("nav");
const mobileBtnExit = document.getElementById("close");
mobileBtn.addEventListener("click", () => {
  nav.classList.add("menu");
});
mobileBtnExit.addEventListener("click", () => {
  nav.classList.remove("menu");
});
