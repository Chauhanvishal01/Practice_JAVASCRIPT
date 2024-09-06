const para = document.getElementById("para");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  para.textContent = "Vishal Chauhan";
});

const img = document.getElementById("img");
let isVisible = true;
img.addEventListener("dblclick", () => {
  if (isVisible) {
    img.style.visibility = "hidden";
  } else {
    img.style.visibility = "visible";
  }

  isVisible = !isVisible;
});

para.addEventListener("mouseover", () => {
  para.style.backgroundColor = "red";
});
para.addEventListener("mouseout", () => {
  para.style.backgroundColor = "";
});

const input = document.getElementById("input");
const display = document.getElementById("display");

input.addEventListener("keydown", (e) => {
  console.log(e.target.value);
});
input.addEventListener("keyup", (e) => {
  display.textContent = e.target.value;
});
