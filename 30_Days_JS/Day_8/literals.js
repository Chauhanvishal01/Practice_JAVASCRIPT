const person = {
  name: "Vishal Chauahan",
  age: 21,
};
console.log(`My name is ${person.name} and  I am ${person.age} years old`);

const mulitLineStr = `this is first line
this is second line
`;
console.log(mulitLineStr);

const fruits=["apple","banana",'cherry',"pineapple"]
const [fruitOne,fruitTwo]=fruits
console.log(fruitOne);
console.log(fruitTwo);

const numbers=[1,2,3,4,5]
const [first,second]=numbers

console.log(first);
console.log(second);

const book = {
    title: "The Coder",
    author: "Vishal Chauhan"
    
}
const {title,author}=book
console.log(title);
console.log(author);