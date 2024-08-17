// singlenton <- construtor
// multiple Instance <- literals

// object literals


// empety object
let JsUser = {}
// console.log(JsUser);


// object.create <= constructor method 

// entery few data in empety object
// symbol declaration
 const mySym = Symbol("key1")
// object declaration
const JsUser1 = {
    name:"Uttam",
    "fullname":"Uttam Sharma",  // we can't acces by using []
    "mySym": "myKey",   //
    age:27, 
    email:"uttamsharma@google.com",
    location:"Jaipur",
    isLoggedIn:false,
    lastLogininDays:["Monday","Tuesday"]
}


//Access of object

// console.log(JsUser1.email);
// console.log(JsUser1["email"]);
// console.log(JsUser1.fullname);

// console.log(JsUser1.mySym);
// console.log(typeof JsUser1.mySym);
// // // access by symbol
// console.log(JsUser1[mySym]);

// // change value

// const js = JsUser1.email = "uttamsharma@warpron.com"
// console.log(js);


// // lock the value 

// Object.freeze(JsUser1)
// // // due the freeze object
// JsUser1.email="uttamsharma@mircosoft.com";
// console.log(JsUser1.email);



// console.log(JsUser1["age"])



// function 

// JsUser.greeting = function(){
//     console.log("HelloJs userl");
    
// }
// console.log(JsUser.greeting)

//object destructure

const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"uttam"
}

const{courseInstructor} = course
console.log(courseInstructor);


// react concept
// const navbar = ({company}) => {

// }

// navbar(company = "uttam")


// API concept
// this is json
// {
//     "name": "uttam",
//     "coursename":"Js",
//     "price":"nocost"
// }

// api in form of array

[
    {},
    {},
    {},
]
