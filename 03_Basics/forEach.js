// forEach  => Higher order function

const coding = ["js","ruby","python","cpp","java"]





coding.forEach(element => {
    //console.log(element);
    
});


coding.forEach(function (item){
   // console.log(item);
    
})

// using arrow function

coding.forEach((val)=>{
     //console.log(val);
    
})

function printMe(item){
   // console.log(item);
    

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
    //console.log(item.languageName+" : "+ item.languageFileName);
    
})

// const coding1 = ["js","ruby","python","cpp","java"]
// const values = coding1.forEach((item) =>{
//     //console.log(values);
//     return item
// })

// console.log(values);




const myNums = [1,2,3,4,5,6,7,8,9,10]


// const newNums1 = myNums.filter( (num) => (num > 4 ))
// console.log(newNums1);

const newNum2  = myNums.filter( (num) => {
    return num > 4
})
//console.log(newNum2);




const newNums3 = []
myNums.forEach((num) => {
    if(num >4){
        newNums3.push(num)
    }

})
//console.log(newNums3);


const books = [
    {title: 'Book One',genre:'Fiction',publish: 1981},
    {title: 'Book Two',genre:'History',publish: 1984},
    {title: 'Book Three',genre:'Science',publish: 1999},
    {title: 'Book Fouth',genre:'Non-Fiction',publish: 1978},
    {title: 'Book Five',genre:'Science',publish: 1997},
    {title: 'Book Six',genre:'Non-Fiction',publish: 1978},
    {title: 'Book Seven',genre:'Fiction',publish: 1989},
    
]

//let userBooks = books.filter((bk)=>(bk.publish === 1989 ))
let userBooks = books.filter((bk) => { return bk.publish >= 2000})

//console.log(userBooks);


const myNumbers = [1,2,3,4,5,6,7,8]

const newNums = myNumbers.map((num) => { return num+10})
console.log(newNums);






// console.log(newNums);


