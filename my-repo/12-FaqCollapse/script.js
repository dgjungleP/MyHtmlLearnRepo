const faq = document.querySelectorAll(".faq");

faq.forEach((item) => {
  console.log(item);
  const text = item.querySelector(".faq-text");
  const toggle = item.querySelector(".faq-toggle");
  item.classList.remove("active");
  if (toggle) {
    const down = toggle.querySelector(".fa-chevron-down");
    const times = toggle.querySelector(".fa-times");
    down.classList.add("active");
    toggle.addEventListener("click", () => {
      if (down.classList.contains("active")) {
        down.classList.remove("active");
      } else {
        down.classList.add("active");
      }
      if (times.classList.contains("active")) {
        times.classList.remove("active");
        toggle.classList.remove("active");
        text.classList.remove("active");
        item.classList.remove("active");
      } else {
        times.classList.add("active");
        toggle.classList.add("active");
        text.classList.add("active");
        item.classList.add("active");
      }
    });
  }
});
