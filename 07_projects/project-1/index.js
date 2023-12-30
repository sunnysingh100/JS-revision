const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
function changeBgColor(e) {
  const btnId = e.target.id;

  switch (btnId) {
    case "grey":
      body.style.backgroundColor = "grey";
      break;
    case "white":
      body.style.backgroundColor = "white";
      break;
    case "yellow":
      body.style.backgroundColor = "yellow";
      break;
    case "blue":
      body.style.backgroundColor = "blue";
      break;
    default:
      body.style.backgroundColor = "black";
      break;
  }
}
buttons.forEach(function (btn) {
  btn.addEventListener("click", changeBgColor);
});
