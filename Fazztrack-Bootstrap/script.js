// JavaScriptDOM
// navbar-name
var navbar = document.getElementById("profile");
heading.style.color = "black";

// Button Tambah Tugas

var button1 = document.getElementById("myButton");
button.style.borderRadius = "20px";
button.style.padding = "10px 20px";
button.style.border = "none";

button.addEventListener("mouseover", function () {
  this.style.backgroundColor = "darkorange";
});

button.addEventListener("mouseout", function () {
  this.style.backgroundColor = "orange";
});

// Button Sort
let button2 = document.getElementById("buttonsort");
button.style.borderRadius = "20px";
button.style.backgroundColor = "orange";
button.style.color = "white";
button.style.padding = "10px 20px";
button.style.border = "none";

button.addEventListener("mouseover", function () {
  this.style.backgroundColor = "darkorange";
});

button.addEventListener("mouseout", function () {
  this.style.backgroundColor = "orange";
});

// Done task
const cb1 = document.getElementById("b1");
const cb2 = document.getElementById("b2");
const cb3 = document.getElementById("b3");
const cb1Text = document.getElementById("cb1-text");
const cb2Text = document.getElementById("cb2-text");
const cb3Text = document.getElementById("cb3-text");
cb1.addEventListener("change", (e) => {
  if (e.target.checked) {
    cb1Text.style.textDecorationLine = "line-through";
  } else {
    cb1Text.style.textDecorationLine = null;
  }
});

cb2.addEventListener("change", (e) => {
  if (e.target.checked) {
    cb2Text.style.textDecorationLine = "line-through";
  } else {
    cb2Text.style.textDecorationLine = null;
  }
});

cb3Text.addEventListener("change", (e) => {
  if (e.target.checked) {
    cb3Text.style.textDecorationLine = "line-through";
  } else {
    cb3Text.style.textDecorationLine = null;
  }
});

const doneList = document.getElementById("done-task");
const list = document.getElementById("list");
let islistShow = false;
doneTaskButton.addEventListener("click", () => {
  if (islistShow) {
    islistShow = false;
    doneTaskButton.style.color = "#7A7F83";
    list.style.display = "none";
  } else {
    islistShow = true;
    doneTaskButton.style.color = "black";
    list.style.display = "block";
  }
});
