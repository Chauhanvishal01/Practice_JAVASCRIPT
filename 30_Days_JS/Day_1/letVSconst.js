//--------------->1 Reassignment
let value = 31;
console.log("Before reassigning the value is", value);
value = 61; //Allowed
console.log("After reassigning the value is", value);

const myFavNumber = 7;
// myFavNumber = 14// Error -> Assignment to constant variable
console.log(myFavNumber);

//------------->2  Initialization
let count;//Allowed
count = 7
console.log(count);

/* const countOne; // ->  Missing initializer in const declaration
countOne = 1;
console.log(countOne); */

//------------> 3 Scope

function values() {
    let a = 20;
    const b = 32;

    console.log("values of a & b:",a,b);
    
}
values()
// console.log(a); --> ReferenceError:  a is not defined
// console.log(b); --> ReferenceError:  b is not defined

//both are block scope cannot access outside the block
//only access within the  block curly braces{} where they are defined


/* 
use const by default ,it helps to acoid acciedental changes to variables 
Example:-->api_url,port etc
use let for variable which you need to reassign values
Example:-->counter etc
*/
