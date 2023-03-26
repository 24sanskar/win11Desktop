let taskbar = document.getElementsByClassName("taskbar")[0];
let startmenu = document.getElementsByClassName("startmenu")[0];

taskbar.addEventListener("click", () => {
  if (startmenu.style.bottom == "50px") {
    startmenu.style.bottom = "-655px";
  } else {
    startmenu.style.bottom = "50px";
  }
});

let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let ampm = hours >= 12 ? "PM" : "AM";
hours = hours % 12;
hours = hours ? hours : 12;
minutes = minutes < 10 ? "0" + minutes : minutes;
let time = hours + ":" + minutes + " " + ampm;
let dateStr = date.toLocaleDateString();
document.getElementById("time").textContent = time;
document.getElementById("date").textContent = dateStr;
