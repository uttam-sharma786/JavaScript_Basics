// arrow function

// current context refer 

// create object

const user= {
    username:"uttam",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to web page`);
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username="tom"
// user.welcomeMessage()


// console.log(this);



// arrow 

// function call(){
//     let username = "uttam"
//     console.log(this.username);
    
// }
// call()


// const one = function(){
//     let username = "Uttam"
//     console.log(this.username);
    
// }

// one()

// const Milk = () => {
//     let username = "Uttam"
//     console.log(this);
    
// }

// Milk()

//  const addTwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,4));

// implicate

// const addTwo = (num1,num2) => ( num1 + num2)
// console.log(addTwo(3,4));

const addTwo = (num1,num2) => ({username:"Uttam"})


const myArray = [3,4,56,7]
// myArray.forEach(function(){})
// myArray.forEach()
