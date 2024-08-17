// console.log("U");
// console.log("T");
// console.log("T");
// console.log("A");
// console.log("M");





function sayMyName(){
    console.log("U");
    console.log("T");
    console.log("T");
    console.log("A");
    console.log("M");
    
}


// sayMyName()

// add two number

function addTwoNumbers(num1,num2){  // function definiation
    console.log(num1+num2);
}
const result = addTwoNumbers(3,3) 
console.log("Result:",result);

function addTwoNumbers(num1,num2){
    // let result = num1+num2
    return num1+num2
}

// console.log(addTwoNumbers(2,4));

// const result = addTwoNumbers(3,3) 
// console.log("Result:",result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
           
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Uttam"))

// console.log(loginUserMessage("Uttam")) // output undefined if argument not define


// rest oprator

function calculateCartPrice(va1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(30,60,40,89));


// object 

const user = {
    username:"Uttam",
    Price:199
}

function handleobject(anyObject){
    console.log(`Username is ${anyObject.username} and Price is ${anyObject.Price}`);
    
}
// console.log(handleobject(user))


// Array 

const myNewArray = [200,300,400]

function returnSecondvalue(getArray){
    return getArray[1]
}
console.log(returnSecondvalue(myNewArray));

