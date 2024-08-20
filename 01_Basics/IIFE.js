// Immediately Invoked function expressions (IIFE)
// To avoid population issues, we use due to global variables 
/*
It is a javascript function that is involed immediately after it is defined. 
It is often used to crete a private scope for variable and functions
*/
// this is name IIFE
( function cademate(){
        console.log('DB connected');
        
    }
)();

// ()() // first one function definition and second function excution
// cademate()

( (name)=>{
    console.log(`DB2 connect ${name}`);
    
})('uttam');

// example
(function(){
    const name = "John";

    function sayHello(){
        console.log("Hello " + name);
    }

    function greeting(){
        console.log('Hello World');
    }

    // You need to call the functions to execute them
    sayHello();
    greeting();
})();
