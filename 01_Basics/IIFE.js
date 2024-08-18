// Immediately Invoked function expressions (IIFE)
// To avoid population issues, we use due to global variables 
   ( function cademate(){
        console.log('DB connected');
        
    }
)();

// ()() // first one function definition and second function excution
// cademate()

( (name)=>{
    console.log(`DB2 connect ${name}`);
    
})('uttam');