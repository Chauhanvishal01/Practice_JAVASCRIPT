const img = document.getElementById("img");
const fruits = document.getElementById("fruits");
const btn = document.getElementById("btn");
const para = document.getElementById("para");

setInterval(() => {
  img.src = `
https://images.pexels.com/photos/16876973/pexels-photo-16876973/free-photo-of-young-woman-sitting-by-the-water-with-a-bouquet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
`;
}, 3000);

btn.addEventListener("click", () => {
  fruits.classList.toggle("bgGreen");
  para.textContent = "Text Changed";
});
/* btn.addEventListener('click', () => {
    if (fruits.className === "bgGreen") {
        fruits.classList = ""
    } else {
        fruits.classList='bgGreen'
    }
}) */

fruits.addEventListener('mouseover', () => {
        fruits.style.border="5px solid red"
    })