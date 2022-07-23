const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
  insert.innerHTML = ` <div class="enevt-container">
  <span class="title">event.key</span>
  <div class="changeKey">
    ${event.key}
  </div>
</div>
<div class="enevt-container">
  <span class="title">event.key</span>
  <div class="changeKey">
  ${event.keyCode}
  </div>
</div>
<div class="enevt-container">
  <span class="title">event.key</span>
  <div class="changeKey">
  ${event.code}
  </div>
</div>`;
});
