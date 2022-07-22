const menuOpne = document.getElementById("open");
const menuClose = document.getElementById("close");
const container = document.querySelector(".container");

menuOpne.addEventListener("click", () => {
  container.classList.add("show-nav");
});
menuClose.addEventListener("click", () => {
  container.classList.remove("show-nav");
});
