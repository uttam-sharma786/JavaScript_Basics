// arrow function
/*
Arrow function are a shortand syntax for writing function in javascript. 
They provide a more concise and readable way to write function,especially 
when using anonymous functions
*/

// current context refer 

// create object

const user= {
    username:"uttam",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to web page`);
        // console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username="tom"
// user.welcomeMessage()


// console.log(this);



// arrow 

function call(){
    const username = "uttam"
    console.log(username);
    
}
call();



const one = function(){
    let username = "Uttam"
    console.log(username);
    
}

one()

const Milk = () => {
    let username = "Uttam"
    console.log(username);
    
}

Milk()

function greeting(){

}

 const addTwo1 = (num1,num2) => {
    return num1+num2
}
console.log(addTwo1(3,4));

// implicate

const addTwo2 = (num1,num2) => ( num1 + num2)
// console.log(addTwo(3,4));

const addTwo3 = (num1,num2) => ({username:"Uttam"})


const myArray = [3,4,56,7]
// myArray.forEach(function(){})
// myArray.forEach()
