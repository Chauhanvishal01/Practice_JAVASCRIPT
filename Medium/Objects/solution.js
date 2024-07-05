/* Write a function that takes an object and a key and 
returns the value associated with that key.
 */
objone = {
  name: "vishal",
  age: 14,
};
function returnValue(obj, key) {
  console.log(obj[key]);
}
returnValue(objone, "age");
/* Write a function that adds a new property to an object. */

function addNewProperty(obj, key, value) {
  obj[key] = value;

  return obj;
}

console.log(addNewProperty(objone, "favLang", "JS"));
/* 
Write a function that removes a property from an object.
 */
function deleteProperty(obj, key) {
    delete obj[key];
    return obj
}

console.log(deleteProperty(objone, "name"));

console.log(objone);
/* 
Write a function that checks if a given property exists in an object.
 */
function isExists(obj, key) {
  return key in obj;
}
console.log(isExists(objone, "age"));

/* 
Write a function that updates the value of a property in an object if the property exists.
 */
function updateProperty(obj,key,value) {
    if (key in obj) {
        obj[key] = value

    }
    return obj;
    
}

console.log(updateProperty(objone,"age",15));
