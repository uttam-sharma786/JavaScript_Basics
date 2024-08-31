const myNumberes = [1,2,3,4,5,6,7,8,9,10]

 const newNumes = myNumberes.map((num) =>{
     return num+10
})

//console.log(newNumes);






const newNums = myNumberes.map((num)=> num*10).map((num) => num+1 )
                .filter((num) => num>=40)

//console.log(newNums);


const myNums = [1,2,3]

const myTotal = myNums.reduce((acc,currentVal) =>{
    //console.log((`acc: ${acc} and currval: ${currentVal}`));
    
    return acc+currentVal
},0)

//const myTotal = myNums.reduce((acc,curr) => acc+curr,0)

//console.log(myTotal);

const shoppingCart = [
    {
        itemName:"js course",
        price: 2999
    },
    {
        itemName:"py course",
        price: 5999
    },
    {
        itemName:"ML course",
        price: 9999
    },
    {
        itemName:"Java course",
        price: 2999
    },
    
]

const priceToPay = shoppingCart.reduce((acc,item)=> acc + item.price,0)
console.log(priceToPay);
