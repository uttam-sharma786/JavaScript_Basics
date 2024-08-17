// const tinderUser = new Object(); this is singlenton object

// const tinderUser = {} ; this is not singlenton object

const tinderUser = {}
tinderUser.id = "12343af"
tinderUser.name = "Ravi"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
// object inside one more object
const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "uttam",
            lastname : "sharma"

        }
    }
}


console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.fullname.userfullname.lastname);


// object combine

const obj1 = {
    1:"a",
    2:"b"
}

const obj2 = {
    1:"a",
    2:"b"
}


// const obj3 = {obj1,obj2}
// console.log(obj3);

// all value combine and represent and combine two object
const obj4 = Object.assign({},obj1,obj2)

console.log(obj4);

