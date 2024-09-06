// fetch('https://something.com').then().catch().finally()

// consumed

// callback hell reduce
// build promise

const promiseOne = new Promise(function(reslove,reject) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Aync task is compete');
        reslove()
        
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
    
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("asyn task 2 ");
        resolve()
        
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

// data from network , file system conusmed
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({                                 // we can pass data in object, array
            userName:"Uttam",
            email:"Uttam@gmail.com"
        })
    },1000)
})


promiseThree.then(function(user){
    console.log(user);   // 
    

})

// 

const promiseFouth= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({userName:"uttam",password:"123"})
        }else {
            reject('ERROR: Something went wrong')
        }
    },1000)
})

// we can't do 

// const userName = promiseFouth.then((user)=>{
//     console.log(user);
//     return user.userName
    
// })

// console.log(userName);


promiseFouth
.then((user) => {
    console.log(user);
    return user.userName
    
}).then((userName) =>{
    console.log(userName);
    
}).catch(function(error){
    console.log(error);
    
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({userName:"JavaScript",age:23})
        }else{
            reject('Error: Js went wrong ')
        }
    },1000)

})

async function consumePromiseFive(){
    try{
        const response  = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
        
    }
    
}

consumePromiseFive()


// https://jsonplaceholder.typicode.com/users


// async function getAllUsers(){
//  try {
//     let response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data  = await response.json()
//     console.log(data);
//  } catch (error) {
//     console.log("error");
//  }
    
// }
// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=> console.log(error));
