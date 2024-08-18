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
        console.log(username);
        console.log(website);
        
    }
    // console.log(website);
    
    two()
    
}

// one()




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
console.log(addTwo(5))
const addTwo = function(num){
    return num +2
}

// console.log(addTwo(5))







