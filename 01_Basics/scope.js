// Global scope and local scope

// let a = 10;
// const b = 20;
// var c = 30;

// console.log(10);
// console.log(20);
// console.log(30);

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}


// console.log(b);





// nested function

function one(){
    const username = "Ram"

    function two(){
        const website = "googlemeet"
        // console.log(username);
        // console.log(website);
        
    }
    // console.log(website);
    
    two()
    
}

one()




if(true){
    const username = "Uttam"
    if(username === "Uttam"){
        const website = " youtube"
        // console.log(username + website);
        
        
    }
    // console.log(website);
    
    
}

// console.log(username);

//++++++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++
// console.log(addOne(5))

function addOne(num){
    return num + 1
}

// console.log(addOne(5));



// expression declartion
// hosting concept
/*
Hosting is a Javascript features that allow you to use variable and functions
 before they are declared.This means that you can use variable and functions 
 before they are defined in your code. Hosting is done by the JavaScript engine, 
 which menes the declaration of variables and functions to the top of their scope
*/
// console.log(addTwo(5))
const addTwo = function(num){
    return num +2
}

console.log(addTwo(5))

/*
What is temporal dead zone in javascript
Temporal dead zone is a concept in JS related to let and const declarations.
Variables with let or const declarations are hoisted to top of their scope
but they are not immediately avaiabe in the code. This means that you can
use a variable before it is declared but the value of the variable will be
undefined until it is assigned a value
*/
// console.log(x);
let x = 5;
console.log(x);








