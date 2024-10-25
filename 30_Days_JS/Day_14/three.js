const paragraph = document.getElementById("para");

// #9 Change paragraph
paragraph.textContent = "Changed Text ";
// #10 create button and display

const btn = document.createElement("button");

btn.innerHTML = "Click Me";

document.body.appendChild(btn);

//#11  addeventListener to btn

btn.addEventListener("click", () => {
  alert("Hello Vishal");
});
