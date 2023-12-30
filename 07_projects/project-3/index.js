const clock = document.getElementById("clock");

function updateTime() {
  let currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();
  let time = `${hours}:${minutes}:${seconds}`;
  clock.innerHTML = time;
}
updateTime();
setInterval(updateTime, 1000);
