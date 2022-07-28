const textarea = document.getElementById("textarea");

const tags = document.getElementById("tags");

let tagsValue = "";
textarea.addEventListener("keyup", (env) => {
  const key = env.key;
  if (key == ",") {
    tagsValue = textarea.value;
    redoTag();
  } else if (key === "Enter") {
    newtag = false;
    textarea.value = "";
    startRandom();
  } else {
    tagsValue = textarea.value;
    redoTag();
  }
});

function startRandom() {
  const times = 30;
  let pre = 0;
  for (let i = 0; i < times; i++) {
    setTimeout(() => {
      const current = Math.floor(Math.random() * tags.children.length);
      tags.children[current].classList.add("active");
      tags.children[pre].classList.remove("active");
      pre = current;
    }, 100 * i);
  }
}

function redoTag() {
  const tagList = tagsValue.split(",");
  while (tags.firstChild) {
    tags.removeChild(tags.firstChild);
  }
  tagList.forEach((tagStr) => {
    if (tagStr == "") {
      return;
    }
    const tag = document.createElement("div");
    tag.classList.add("tag");
    tag.innerText = tagStr;
    tags.appendChild(tag);
  });
}
