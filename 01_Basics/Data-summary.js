// Primitive( Call by value )
// We have seven type 1. String 2. Number 3. Boolean 4. null 5. Undefined 6. symbol(using unique) 7. Bignet
// Non Primitive(Reference)
// Array, Objects,Functions

const score = 100
const newscore = score
console.log(newscore)

console.log(score);

const scorevalue = 100.3
console.log(scorevalue);


const isLoggidIn= true;
console.log(isLoggidIn);

const outsideTemp = null
console.log(typeof outsideTemp);
let useEmail;
console.log(useEmail);

const id = Symbol('123')
const anotherId = Symbol('123')


console.log(id === anotherId); //  stricter check value and data types also

// Non Primitive

const heros = ["shaktiman","naagraj","doga"];

let myObj = {
    name: "uttam",
    age: 23

}

function name(params) {
    
}
const myFunction = function() {
    console.log("Hello World");
}
myFunction()

// Here function behavior as a variable