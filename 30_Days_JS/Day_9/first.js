const name = document.getElementById("name");
const age = document.querySelector(".age");
const body = document.body;
const ul = document.getElementById("fruits");
const fruitone = document.getElementById("fruitone");
name.textContent = "vishal Chauhan";
age.style.backgroundColor = "red";

const div = document.createElement("div");
div.textContent = "hello i am div";
body.appendChild(div); //single node

/*  const textnode='this is text'
 body.append(div,textnode)//multiple nodes
 */
const li = document.createElement("li");
li.textContent = "Cherry";
ul.appendChild(li);

age.remove();
// ul.removeChild(li)
ul.removeChild(fruitone);

// body.removeChild(div);
