const name1 = "Uttam";
const repoCount = 10

// console.log(name1+repoCount+"value")

// console.log(`Hello my name is ${name1} my repo count is ${repoCount} repo count`);

// string declaration
const gameName = new String("Uttam-ut")

// string method

console.log(gameName[0]);


// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
console.log(newString)
// console.log(gameName.includes('a'))
// console.log(gameName.slice(1,4))
console.log(gameName.split(4))
const anotherString = " Uttam  "
console.log(anotherString.trim());

const url = "https://uttam.com/uttam%20sharma"
console.log(url.replace('%20','-----'))