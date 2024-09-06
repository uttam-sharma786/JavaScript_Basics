// how to work fetch

// https://blog.logrocket.com/fetch-api-node-js/

// The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response to that request — as soon as the server responds with headers — even if the server response is an HTTP error status. You can also optionally pass in an init options object as the second argument (see Request).

// callback hell 
  


//  const PromiseFirst = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("hi");
        
//      resolve()
//     },2000)

// })

// PromiseFirst.then(function(){
//     console.log("try out");
    
// })

// const promiseTwo = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({
//             userName:"uttamsharma",
//             email:"uttam@example.com"
//         })
//     },1000)

// })

// promiseTwo.then(function(user){
//     console.log(user); 
// })


const promiseFouth= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({userName:"uttam",password:"123",age:22}
            )
        }else {
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFouth
.then((user) => {
    console.log(user);
    return user.userName
    
}).then((userName) =>{
    console.log(userName);

    
}).catch(function(error){
    console.log(error);
    
}).finally(() => console.log("The promise is either resolved or rejected"))