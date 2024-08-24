// forEach  => Higher order function

const coding = ["js","ruby","python","cpp","java"]




coding.forEach(element => {
    //console.log(element);
    
});


coding.forEach(function (item){
    //console.log(item);
    
})

// using arrow function

coding.forEach((val)=>{
     //console.log(val);
    
})

function printMe(item){
    //console.log(item);
    

}

coding.forEach(printMe)



coding.forEach((item,index,arr)=>{
    //console.log(item,index,arr)
    
})

const myCoding = [
    {
        languageName:"JavaScript",
        languageFileName: "Js"
    },
    {
        languageName:"Java",
        languageFileName: "Java"
    },
    {
        languageName:"python",
        languageFileName: "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName+" : "+item.languageFileName);
    
})

