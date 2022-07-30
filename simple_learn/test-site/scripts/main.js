const title = document.querySelector("h1");

title.innerText = "Hello World";

const button = document.querySelector("button");

if (!localStorage.getItem("name")) {
  seUserName();
} else {
  let storedName = localStorage.getItem("name");
  title.innerText = "Hello : " + storedName;
}

function seUserName() {
  let myName = prompt("please input your name");
  localStorage.setItem("name", myName);
  title.innerText = "Hello : " + myName;
}

button.addEventListener("click", () => {
  seUserName();
});
