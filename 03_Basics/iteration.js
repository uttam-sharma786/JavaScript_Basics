// for


for (let index = 0; index < 10; index++) {
    const element = index;
    if (element == 5) {
        //console.log("5 is best number");
        
    }
    //console.log(element);
    for (let index = 1; index <=3; index++) {
        //console.log(`Outer loop value: ${index}`);
        
        for (let j = 1; j <10; j++) {
           //console.log(`Inner loop value ${j} and inner loop ${index}`);

       // console.log(index+ '*'+ j+ ' = ' + index*j);
        
            
            
        }
        
        
    }
    let myArray = ["flash","batman","superman"]
    for (let index = 0; index < myArray.length; index++) {
        const element = myArray[index];
      //  console.log(element);

       
        
        
    }

}

// keywords

// break and continue

// for (let index = 1; index <=20; index++) {
//     if (index == 6) {
//     console.log(`Detected is 5`);
//             break
//     }
//     console.log(` Value of i is ${index}`);
    
    
// }
for (let index = 1; index <=20; index++) {
    if (index == 5) {
    console.log(`Detected is 5`);
            continue
    }
    console.log(` Value of i is ${index}`);
    
    
}

