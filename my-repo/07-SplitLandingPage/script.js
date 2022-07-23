const left = document.querySelector(".split.left");
const right = document.querySelector(".split.right");

left.addEventListener("mouseenter", () => {
  left.classList.add("checkin");
  right.classList.add("checkout");
});

right.addEventListener("mouseenter", () => {
  right.classList.add("checkin");
  left.classList.add("checkout");
});

left.addEventListener("mouseleave", () => {
  left.classList.remove("checkin");
  right.classList.remove("checkout");
});

right.addEventListener("mouseleave", () => {
  right.classList.remove("checkin");
  left.classList.remove("checkout");
});
