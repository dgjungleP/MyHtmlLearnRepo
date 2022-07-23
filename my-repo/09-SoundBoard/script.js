const buttons = document.getElementById("buttons");

const audios = document.querySelectorAll("audio");
audios.forEach((audio) => {
  addButton(audio);
});

function addButton(audio) {
  const btn = document.createElement("button");
  btn.innerText = audio.id;
  btn.addEventListener("click", () => {
    stopSound();
    audio.play();
  });

  buttons.appendChild(btn);
}

function stopSound() {
  audios.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
}
