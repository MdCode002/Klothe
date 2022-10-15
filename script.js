const menuicon = document.querySelector(".menuicon");
const menu = document.querySelector(".menu");
const mobile2 = document.querySelector("#mobile2");

menuicon.addEventListener("click", () => {
  console.log("es");
  menu.classList.toggle("menuback");
});

croix.addEventListener("click", () => {
  console.log("es");
  menu.classList.toggle("menuback");
});
setInterval(() => {
  mobile2.style.opacity = "0";
}, 5000);
setInterval(() => {
  mobile2.style.opacity = "1";
}, 10000);
