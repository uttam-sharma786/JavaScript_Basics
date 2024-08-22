// if

// if (condition){

// }


// if(true){

// }

// if(false){

// }

const isUserLoggedIn = true

if(3 !== "3"){
    // console.log("executed");
}

// <,>,<=, >=, ==,!=,===,!==

const temperature = 70

if(temperature === 71){
    console.log("less than 50");
    
} else {
    //console.log("temperature is greater than 50");
    
}
// console.log("execute");

const score = 200

if(score > 400){
    
    
    const power = "fly"
    console.log(`User Power:${power}`);
    
}




// shorthand note

const balance = 1000

if (balance > 5000)  
    console.log("test");


// nesting

if (balance < 500) {
    console.log("less than 500");
    
} else if(balance < 750){
    console.log("less than 750");
    
}else if( balance < 900){
    console.log("less than 900");
    
}else {
    console.log("less than 1200");
    
}

const isUserLoggedIn1 = true
const debitcard = true

const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserLoggedIn && debitcard ) {
    console.log("Allow to buy course");
    
}

if(loggedInFromEmail || loggedInFromGoogle  ){
    console.log("User logged in");
    
}





